using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RealEstate.Models.Requests.Auth;

public class LoginRequestModel
{
    [JsonPropertyName("email")]
    [Required]
    [EmailAddress (ErrorMessage = "Почта не проходит валидацию")]
    public string Email { get; set; }

    [JsonPropertyName("password")]
    [Required (ErrorMessage = "Введите пароль")]
    [StringLength(25, MinimumLength = 6, ErrorMessage = "Пароль должен содежрить минимум 6 символов")]
    public string Password { get; set; }
}