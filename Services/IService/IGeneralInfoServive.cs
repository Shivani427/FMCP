using Org.BouncyCastle.Asn1.Ocsp;
using FMCP_.Models;

using FMCP_.Models.RegDto;
namespace FMCP_.Services.IService
{
    public interface IGeneralInfoServive
    {
        Task<ResponseDto?> GetLeeseInfofromReg(long appId);
        //Task<ResponseDto?> CreateLeeseDetail(LeeseDetDto LeeseDto);
        //        Task<ResponseDto?> GetAllCouponAsync();
        //        Task<ResponseDto?> GetCouponByIdAsync(int id);
        //        Task<ResponseDto?> CreateCouponAsync(CouponDto couponDto);
        //        Task<ResponseDto?> UpdateCouponAsync(CouponDto couponDto);
        //        Task<ResponseDto?> DeleteCouponAsync(int id);
    }
}
