


$(document).on("click", "#signup_ID", function () {

    $("#modal-info_signup").modal({ show: true, keyboard: true, backdrop: 'static' });

    //$(".modal-body").empty();

    //$(".modal-body").append("<i class='fa fa-chevron-right'></i><span style='padding-left:10px'>Aşağıdaki Ürünler Tablosundan Ürün Seçiniz</span>");

    event.preventDefault();
    //return false;
})


$(document).on("click", "#btnSignUp_ID", function () {

    var Name = $('#Input_Name_ID').val().trim();
    var Surname = $('#Input_Surname_ID').val().trim();
    var Eposta = $('#Input_email_ID').val().trim();
    var Tel = $('#Input_tel_ID').val().trim();
    var password = $('#Input_password_ID').val().trim();
    var password_req = $('#Input_password_Verification_ID').val().trim();
    var kvk = $('#Input_kvkCheck_ID').is(':checked');



    //if (Name.length == 0) {
    //    $('#error_name').show();
    //    return false;
    //}
    //if (Surname.length == 0) {
    //    $('#error_surname').show();
    //    return false;
    //}
    //if (Eposta.length == 0) {
    //    $('#error_eposta').show();
    //    return false;
    //}
    //if (Tel.length == 0) {
    //    $('#error_telefon').show();
    //    return false;
    //}
    //if (password.length == 0) {
    //    $('#error_parola').show();
    //    return false;
    //}
    //if (password_req.length == 0) {
    //    $('#error_parola_res').show();
    //    return false;
    //}
    //if (kvk == false) {
    //    $('#error_kvk').show();
    //    return false;
    //}

    //if (password != password_req) {
    //    $('#error_parola_same').show();
    //    return false;

    //}

    //var UserArray = new Array(Name, Surname, Eposta, Tel, password, kvk);



    //$.ajax({
    //    type: "post",
    //    url: "/Default/UserSignup",
    //    datatype: "json",
    //    data: { "_userinformation": UserArray },
    //    error: function (jqXHR, textStatus, errorThrown) {
    //        alert(jqXHR + "-" + textStatus + "-" + errorThrown);
    //    },
    //    success: function (data) { // İşlem tamamlandığında ne yapacağı
    //        $('#modal-info_signup').hide();
    //    }
    //});




})

$(document).ready(function () {

    $('#signform_ID').validate({
        errorElement: "div",
        errorClass: "error-holder",
        rules: {
            name: {
                required: true
            },
            surname: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Bu alan Boş Geçilemez"
            },
            surname: {
                required: "Bu alan Boş Geçilemez"
            }
        }
    });

});



//$(document).on("click", "#btnSignUp_ID", function () {

//    var username = $('#İnput_Name_ID').val();
//    //alert(username);

//    $("#modal-info_Validate").modal({ show: true, keyboard: true, backdrop: 'static' });

//    $(".modal-body").empty();

//    $(".modal-body").append("<i class='fa fa-chevron-right'></i><span style='padding-left:10px'>Aşağıdaki Ürünler Tablosundan Ürün Seçiniz</span>");

//    event.preventDefault();
//    return false;
//})