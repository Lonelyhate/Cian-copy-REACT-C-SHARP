using System.Text.Json.Serialization;
using RealEstate.Models.Enums;

namespace RealEstate.Models.Response.Auth;

public class BaseUserResponseModel
{
    [JsonPropertyName("user")]
    public UserResponseModel User { get; set; }
    
    [JsonPropertyName("token")]
    public string Token { get; set; }
}

public class UserResponseModel
{
    [JsonPropertyName("email")]
    public string Email { get; set; }
    
    [JsonPropertyName("role")]
    public Role Role { get; set; }
}