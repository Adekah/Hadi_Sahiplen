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
    
    public partial class tbl_User
    {
        public int User_ID { get; set; }
        public string User_Name { get; set; }
        public string User_Surname { get; set; }
        public Nullable<int> CityID { get; set; }
        public Nullable<int> DistrictID { get; set; }
        public string User_Adress { get; set; }
        public string User_Email { get; set; }
        public string User_Password { get; set; }
        public string User_Tel { get; set; }
    }
}