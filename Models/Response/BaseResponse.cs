using StatusCodes = RealEstate.Models.Enums.StatusCodes;

namespace RealEstate.Models.Response;

public class BaseResponse<T>
{
    public string Message { get; set; }
    
    public StatusCodes StatusCode { get; set; }
    
    public T Data { get; set; }
}