﻿


$(document).on("click", "#signup_ID", function () {

    $("#modal-info_signup").modal({ show: true,keyboard:true,backdrop:'static' });

    //$(".modal-body").empty();

    //$(".modal-body").append("<i class='fa fa-chevron-right'></i><span style='padding-left:10px'>Aşağıdaki Ürünler Tablosundan Ürün Seçiniz</span>");
    
    event.preventDefault();
    return false;
})