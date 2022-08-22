using RealEstate.Models.Requests.Auth;
using RealEstate.Models.Response.Auth;

namespace RealEstate.Services.Account;

public interface IAccountService
{
    Task<RegisterResponseModel> Registration(RegisterRequestModel model);

    Task<AuthResponseModel> Auth(string email);

    Task<LoginResponseModel> Login(LoginRequestModel model);
}