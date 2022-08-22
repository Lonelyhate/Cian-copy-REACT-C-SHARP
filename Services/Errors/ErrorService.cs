using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RealEstate.Services.Errors;

public class ErrorService : IErrorsService
{
    public bool ModelValidTry<T>(T model)
    {
        var context = new ValidationContext(model);
        var results = new List<ValidationResult>();

        return Validator.TryValidateObject(model, context, results, true);
    }

    public string ModelValidErrors<T>(T model)
    {
        Console.WriteLine("lllllllllllllllllllllllllllllllll");
        var context = new ValidationContext(model);
        var results = new List<ValidationResult>();
        StringBuilder errorsText = new StringBuilder("");
        
        foreach(var error in results)
        {
            Console.WriteLine(error);
            errorsText.Append(error + ":");
        }
        Console.WriteLine(errorsText.ToString());
        return errorsText.ToString();
    }
}