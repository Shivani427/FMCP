using AutoMapper;
using FMCP_.Data;
using FMCP_.Models;

using FMCP_.Models.fmcpDto;
using FMCP_.Models.RegDto;
using FMCP_.Services.IService;
using Microsoft.EntityFrameworkCore;
using static Microsoft.AspNetCore.Razor.Language.TagHelperMetadata;
namespace FMCP_.Services
{
    public class GeneralInfoService : IGeneralInfoServive
    {
        private readonly AppDbContext1 _db1;
        private readonly AppDbContext2 _db2;
        private ResponseDto _response;
        private IMapper _mapper;

        public GeneralInfoService(AppDbContext1 db1, AppDbContext2 db2, IMapper mapper)
        {
            _db1 = db1;

            _db2 = db2;
            _response = new ResponseDto();
            _mapper = mapper;
        }

       
        public async Task<ResponseDto> GetLeeseInfofromReg(long p_appId)
        {
            var response = new ResponseDto();

            try
            {
                p_appId = 17;

                List<LeeseDetail> leeseDetails = await _db2.LeeseDetail
                    .FromSqlRaw("CALL pr_fmcp_getleeseinfo({0})", p_appId)
                    .ToListAsync();

                response.result = leeseDetails;
            }
            catch (Exception ex)
            {
                response.isSuccess = false;
                response.message = ex.Message;
            }

            return response;
        }


        //public Task<ResponseDto?> CreateLeeseandqualersonDetail(qualifiedPersonDetail data, long appId)
        //{
        //    var response = new ResponseDto();

        //    try
        //    {

        //    //    appId = 17;
        //    //  response.result= await _db1.qualifiedPersonDetail
        //    //        .FromSqlRaw("CALL pr_fmcp_saveGeneralinfo({1})", p_appId,data)
                 

        //    //    response.result = leeseDetails;
        //    }
        //    catch (Exception ex)
        //    {
        //        response.isSuccess = false;
        //        response.message = ex.Message;
        //    }

        //    return response;
        //}
    }

    
}


