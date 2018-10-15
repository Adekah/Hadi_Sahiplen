using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using HadiSahiplen.Models;


namespace HadiSahiplen.Data
{
    public class Data
    {


        public static List<Tbl_Advert_Vİew> Adverts()
        {
            using (HadisahiplenEntities db = new HadisahiplenEntities())
            {
                return db.Tbl_Advert_Vİew.ToList();
            }
        }
    }
}