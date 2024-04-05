using Microsoft.AspNetCore.Mvc;

namespace FMCP_.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
