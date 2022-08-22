using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RealEstate.Models.Enums;

public enum Role
{
    [Display(Name = "User")]    
    User,
    Admin
}