//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HadiSahiplen.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_Advert
    {
        public int Advert_ID { get; set; }
        public int User_ID { get; set; }
        public string Pet_Name { get; set; }
        public string Pet_Gender { get; set; }
        public string Pet_Kind { get; set; }
        public string Pet_İnformation { get; set; }
        public Nullable<int> CityID { get; set; }
        public Nullable<int> DistrictID { get; set; }
        public string Pet_Type { get; set; }
        public Nullable<System.DateTime> Advert_Date { get; set; }
        public string Advert_ProfilePhoto { get; set; }
    }
}
