namespace RealEstate.Services.Errors;

public interface IErrorsService
{
    bool ModelValidTry<T>(T model);

    string ModelValidErrors<T>(T model);
}