using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HadiSahiplen.Models;
using HadiSahiplen.Data;

namespace HadiSahiplen.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {

            ViewBag.Adverts = Data.Data.Adverts();

            return View();
        }

        public ActionResult Adverts()
        {
            ViewBag.Adverts = Data.Data.Adverts();
            return View();
        }
        public ActionResult AdvertDetail(int? AdvertID,Tbl_Advert_Vİew AdvertView)
        {
            ViewBag.Adverts = Data.Data.Adverts();
            AdvertID = int.Parse(RouteData.Values["id"].ToString());
            ViewBag.AdvertsImage = Data.Data.AdvetImages(int.Parse(AdvertID.ToString()));
            AdvertView = Data.Data.Get_Advert(int.Parse(AdvertID.ToString()));
            return View( AdvertView);
        }
        [HttpPost]
        public ActionResult UserSignup(Array _userinformation)
        {
            return View();
        }
    }
}