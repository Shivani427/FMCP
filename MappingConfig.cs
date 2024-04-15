using AutoMapper;

using FMCP_.Models;
using static Microsoft.AspNetCore.Razor.Language.TagHelperMetadata;

namespace FMCP_
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingconfig = new MapperConfiguration(config =>
            {
             //   config.CreateMap<Coupon, CouponDto>();
              //  config.CreateMap<CouponDto, Coupon>();
            });
            return mappingconfig;
        }
    }
}




