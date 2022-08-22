using System.Text.Json.Serialization;
using RealEstate.Models.Enums;

namespace RealEstate.Models.Response.Auth;

public class RegisterModel : BaseUserResponseModel
{

}

public class RegisterResponseModel : BaseResponse<RegisterModel>
{
    
}