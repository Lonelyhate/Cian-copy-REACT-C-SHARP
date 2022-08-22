using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RealEstate.Models.Requests.Auth;

public class RegisterRequestModel
{
    [Required (ErrorMessage = "Введите почту")]
    [EmailAddress (ErrorMessage = "Почта не проходит валидацию")]
    [JsonPropertyName("email")] 
    public string Email { get; set; }

    [JsonPropertyName("password")] 
    [Required (ErrorMessage = "Введите пароль")]
    [StringLength(25, MinimumLength = 6, ErrorMessage = "Пароль должен содежрить минимум 6 символов")]
    public string Password { get; set; }

    [JsonPropertyName("confrimedPassword")]
    [Required (ErrorMessage = "Введите подтвержденный пароль")]
    [StringLength(25, MinimumLength = 6, ErrorMessage = "Пароль должен содежрить минимум 6 символов")]
    [Compare("Password", ErrorMessage = "Пароли не совпадают")]
    public string PasswordConfrim { get; set; }
}