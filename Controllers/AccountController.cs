using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Extensions;
using RealEstate.Models.Enums;
using RealEstate.Models.Requests.Auth;
using RealEstate.Services.Account;
using StatusCodes = RealEstate.Models.Enums.StatusCodes;

namespace RealEstate.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : Controller
{
    private readonly IAccountService _accountService;

    public AccountController(IAccountService accountService)
    {
        _accountService = accountService;
    }
    
    [HttpPost("registration")]
    public async Task<IActionResult> Registration(RegisterRequestModel model)
    {
        var response = await _accountService.Registration(model);

        if (response.StatusCode == StatusCodes.ModelValidErrors) return BadRequest(response);

        if (response.StatusCode == StatusCodes.BadRequest) return BadRequest(response);

        if (response.StatusCode == StatusCodes.InternalServer) return StatusCode(500, response);

        return Json(response);
    }

    [HttpGet("auth")]
    [Authorize]
    public async Task<IActionResult> Auth()
    {
        string? email = HttpContext.User.FindFirst(ClaimTypes.Name)?.Value;

        var response = await _accountService.Auth(email);

        if (response.StatusCode == StatusCodes.NotFound) return NotFound(response.Message);

        if (response.StatusCode == StatusCodes.InternalServer) return StatusCode(500, response);

        return Ok(response);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestModel model)
    {
        var response = await _accountService.Login(model);

        if (response.StatusCode == StatusCodes.NotFound) return NotFound(response);

        if (response.StatusCode == StatusCodes.BadRequest) return BadRequest(response);

        if (response.StatusCode == StatusCodes.InternalServer) return StatusCode(500, response);

        return Ok(response);
    }
}