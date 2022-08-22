using RealEstate.Models.CRM;

namespace RealEstate.Helpers.interfaces;

public interface IAccountHelpler
{
    void CreatedPasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);

    bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt);

    string CreateToken(User user);
}