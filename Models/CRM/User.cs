using System.ComponentModel.DataAnnotations.Schema;
using RealEstate.Models.Enums;

namespace RealEstate.Models.CRM;

[Table(("Users"))]
public class User
{
    [Column("user_id")]
    public int Id { get; set; }
    
    [Column("user_email")]
    public string Email { get; set; }
    
    [Column("user_password_hash")]
    public byte[] PasswordHash {get; set;}
    
    [Column("user_password_salt")]
    public byte[] PasswordSalt { get; set; }
    
    [Column("user_role")]
    public Role Role { get; set; }
}