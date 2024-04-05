using Microsoft.AspNetCore.Mvc;

namespace FMCP_.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            GetIPAddress();
            return View();
        }
        public string GetIPAddress()
        {
            string IPAddress = string.Empty;
            try
            {
                IPAddress = HttpContext.Connection.RemoteIpAddress?.ToString();
            }
            catch (Exception ex)
            {
                throw new Exception("Unable to get IP Address for this system", ex);
            }
            return IPAddress;
        }

    }
}
