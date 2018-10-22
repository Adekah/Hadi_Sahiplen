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
        public static List<tbl_Advert_Image> AdvetImages(int id )
        {
            using (HadisahiplenEntities db = new HadisahiplenEntities())
            {
                return db.tbl_Advert_Image.Where(a => a.Advert_ID == id).ToList();
            }
        }
        public static Tbl_Advert_Vİew Get_Advert(int id)
        {
            using (HadisahiplenEntities db = new HadisahiplenEntities())
            {
                return db.Tbl_Advert_Vİew.Where(a => a.Advert_ID == id).SingleOrDefault();
            }
        }

    }
}