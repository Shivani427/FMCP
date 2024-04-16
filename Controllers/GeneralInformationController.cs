using FMCP_.Models;
using FMCP_.Models.RegDto;
using FMCP_.Services.IService;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FMCP_.Controllers
{
    public class GeneralInformationController : Controller
    {
        private readonly IGeneralInfoServive _generalInfoService;
        public GeneralInformationController(IGeneralInfoServive generalInfoService)
        {
            _generalInfoService = generalInfoService;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public async Task<IActionResult> PartBGeneralInformation(long appId)
        
        
        
        
        {
            List<LeeseDetail> list = new();
            ResponseDto ?response
             = await _generalInfoService.GetLeeseInfofromReg(appId);
            if (response != null && response.isSuccess)
            {
                list = (List<LeeseDetail>)response.result;
            }
            else { }
            return View(list);
           
        }
        //[HttpGet]
        //public IActionResult PartCLocationandAccessibilityofMines()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult PartDDetailsofLastApprovedMiningPlan()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult PartE1ReviewofLastestApprovedPropsals()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult PartE2ReviewofLastestApprovedPropsals()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult PartE3ReviewofLastestApprovedPropsals()
        //{
        //    return View();
        //}
        //public IActionResult PartE4ReviewofLastestApprovedPropsals()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult Chapter_II_1GelogyandExploration()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult Chapter_II_2GelogyandExploration()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult Chapter_II_3GelogyandExploration()
        //{
        //    return View();
        //}
        //[HttpGet]
        //public IActionResult Chapter_II_4GelogyandExploration()
        //{
        //    return View();
        //}
        //public IActionResult Chapter_III_1_Mining()
        //{
        //    return View();
        //}
        //public IActionResult Chapter_III_2_Mining()
        //{
        //    return View();
        //}
        //public IActionResult Chapter_IV_1_Stacking_Of_Top_Soil_Mineral_Reject_Fines_Tailings_Slimes_and_Their_Disposal()
        //{
        //    return View();
        //}
    }
}
