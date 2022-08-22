using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using RealEstate.Helpers.interfaces;
using RealEstate.Models;
using RealEstate.Models.CRM;
using RealEstate.Models.Enums;
using RealEstate.Models.Requests.Auth;
using RealEstate.Models.Response.Auth;
using RealEstate.Services.Errors;
using StatusCodes = RealEstate.Models.Enums.StatusCodes;

namespace RealEstate.Services.Account;

public class AccountService : IAccountService
{
    private readonly ApplicationDbContext _db;
    private readonly IAccountHelpler _accountHelpler;
    private readonly IErrorsService _errorsService;

    public AccountService(ApplicationDbContext db, IAccountHelpler accountHelpler, IErrorsService errorsService)
    {
        _db = db;
        _accountHelpler = accountHelpler;
        _errorsService = errorsService;
    }
    
    public async Task<RegisterResponseModel> Registration(RegisterRequestModel model)
    {
        try
        {


            RegisterResponseModel baseResponse = new RegisterResponseModel();
            
            /*var context = new ValidationContext(model);
            var results = new List<ValidationResult>();
            
            
            if (!Validator.TryValidateObject(model, context, results, true))
            {
                baseResponse.StatusCode = StatusCodes.ModelValidErrors;
                StringBuilder errorsText = new StringBuilder("");
                foreach (var error in results)
                {
                    errorsText.Append(error.ErrorMessage + ":");
                }

                baseResponse.Message = _errorsService.ModelValidErrors<RegisterRequestModel>(model);
                return baseResponse;
            }*/
            
            var userCheck = await _db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (userCheck is not null)
            {
                baseResponse.Message = "Пользователь с такой почтой уже есть";
                baseResponse.StatusCode = StatusCodes.BadRequest;
                return baseResponse;
            }
            
            _accountHelpler.CreatedPasswordHash(model.Password, out byte[] passwordHash, out byte[] passwordSalt);

            User user = new User()
            {
                Email = model.Email,
                Role = Role.User,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();

            string token = _accountHelpler.CreateToken(user);

            RegisterModel responseModel = new RegisterModel()
            {
                User = new UserResponseModel
                {
                    Email = user.Email,
                    Role = Role.User,
                },
                Token = token
            };

            baseResponse.Data = responseModel;
            baseResponse.StatusCode = StatusCodes.OkCreated;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new RegisterResponseModel()
            {
                StatusCode = StatusCodes.InternalServer,
                Message = "Ошибка сервера"
            };
        }
    }

    public async Task<AuthResponseModel> Auth(string email)
    {
        try
        {
            AuthResponseModel baseResponse = new AuthResponseModel();
            
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == email);

            if (user is null)
            {
                baseResponse.Message = "Пользоваетля такого нет";
                baseResponse.StatusCode = StatusCodes.NotFound;
                return baseResponse;
            }

            User userToken = new User()
            {
                Email = user.Email,
                Role = user.Role,
                PasswordHash = user.PasswordHash,
                PasswordSalt = user.PasswordSalt
            };

            string token = _accountHelpler.CreateToken(userToken);

            AuthModel responseModel = new AuthModel()
            {
                User = new UserResponseModel()
                {
                    Email = user.Email,
                    Role = user.Role
                }
            };

            baseResponse.Data = responseModel;
            baseResponse.Data.Token = token;
            baseResponse.StatusCode = StatusCodes.Ok;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new AuthResponseModel()
            {
                StatusCode = StatusCodes.InternalServer,
                Message = "Ошибка сервера"
            };
        }
    }

    public async Task<LoginResponseModel> Login(LoginRequestModel model)
    {
        try
        {
            LoginResponseModel baseResponse = new LoginResponseModel();

            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user is null)
            {
                baseResponse.Message = "Почта не найдена";
                baseResponse.StatusCode = StatusCodes.NotFound;
                return baseResponse;
            }

            if (!_accountHelpler.VerifyPasswordHash(model.Password, user.PasswordHash, user.PasswordSalt))
            {
                baseResponse.Message = "Пароль неправильный";
                baseResponse.StatusCode = StatusCodes.BadRequest;
                return baseResponse;
            }

            var token = _accountHelpler.CreateToken(user);

            LoginModel loginModelResponse = new LoginModel()
            {
                User = new UserResponseModel()
                {
                    Email = user.Email,
                    Role = user.Role
                },
                Token = token
            };

            baseResponse.Data = loginModelResponse;
            baseResponse.StatusCode = StatusCodes.Ok;
            return baseResponse;
        }
        catch (Exception e)
        {
            return new LoginResponseModel()
            {
                StatusCode = StatusCodes.NotFound,
                Message = "Ошибка сервера"
            };
        }
    }
}