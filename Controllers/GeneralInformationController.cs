using Microsoft.AspNetCore.Mvc;

namespace FMCP_.Controllers
{
    public class GeneralInformationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult PartBGeneralInformation()
        {
            return View();
        }
        [HttpGet]
        public IActionResult PartCLocationandAccessibilityofMines()
        {
            return View();
        }
        [HttpGet]
        public IActionResult PartDDetailsofLastApprovedMiningPlan()
        {
            return View();
        }
        [HttpGet]
        public IActionResult PartE1ReviewofLastestApprovedPropsals()
        {
            return View();
        }
        [HttpGet]
        public IActionResult PartE2ReviewofLastestApprovedPropsals()
        {
            return View();
        }
        [HttpGet]
        public IActionResult PartE3ReviewofLastestApprovedPropsals()
        {
            return View();
        }
        public IActionResult PartE4ReviewofLastestApprovedPropsals()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Chapter_II_1GelogyandExploration()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Chapter_II_2GelogyandExploration()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Chapter_II_3GelogyandExploration()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Chapter_II_4GelogyandExploration()
        {
            return View();
        }
        public IActionResult Chapter_III_1_Mining()
        {
            return View();
        }
        public IActionResult Chapter_III_2_Mining()
        {
            return View();
        }
        public IActionResult Chapter_IV_1_Stacking_Of_Top_Soil_Mineral_Reject_Fines_Tailings_Slimes_and_Their_Disposal()
        {
            return View();
        }
    }
}
