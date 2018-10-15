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
    }
}