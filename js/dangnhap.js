function formvalid() {
    $(document).ready(function(){
        $("#form_success").css("z-index","1").css("opacity","1");
        $("#username_login").html("All your information are corrected. Welcomeback " + username.value + " !");
    })
    return false;
}

var username_condition = false;
var password_condition = false;

$(document).ready(function () {
    $("#td_signin").attr("disabled", true);
    $("#username,#password").keyup(function () {
        if (username_condition == true && password_condition == true) {
            $("#td_signin").attr("disabled", false);
            $("#td_signin").attr("class", "td_signin");
        }
        else{
            $("#td_signin").attr("disabled", true);
            $("#td_signin").attr("class", "td_signin_prevent");
        }
    })
})

$(document).ready(function () {
    $("#username").bind("input propertychange blur", function () {
        var usernameparttern = /^\w{6,10}$/;
        var username = document.getElementById("username");
        if (username.value == "") {
            $("#username").css("border-left", "2px solid red");
            $("#username_wrong").html("Please enter your username");
            username_condition = false;
        }
        else
            if (usernameparttern.test(username.value) == false) {
                $("#username").css("border-left", "2px solid red");
                $("#username_wrong").html("Please enter 6 to 10 characters");
                username_condition = false;
            }
            else {
                $("#username").css("border-left", "2px solid LimeGreen");
                $("#username_wrong").html("");
                username_condition = true;
            }
    })

    $("#password").bind("input propertychange blur", function () {
        var passwordparttern = /^\w{8,}$/;
        var password = document.getElementById("password");
        if (password.value == "") {
            $("#password").css("border-left", "2px solid red");
            $("#password_wrong").html("Please enter your password");
            password_condition = false;
        }
        else
            if (passwordparttern.test(password.value) == false) {
                $("#password").css("border-left", "2px solid red");
                $("#password_wrong").html("Please enter at least 8 characters");
                password_condition = false;

            }
            else {
                $("#password").css("border-left", "2px solid LimeGreen  ");
                $("#password_wrong").html("");
                password_condition = true;
            }
    })
})

var icon_condition = false;
var button_condition = false;

function formvalid1() {
    var feedback = document.getElementById("feedback");
    if (icon_condition == false) {
        $(document).ready(function () {
            $("#opinion_wrong").html("Please choose your opinion");
        })
        return false;
    }
    else {
        $(document).ready(function () {
            $("#opinion_wrong").html("");
        })
    }
    if (button_condition == false) {
        $(document).ready(function () {
            $("#feedback_category_wrong").html("Please choose your feedback category");
        })
        return false;
    }
    else {
        $(document).ready(function () {
            $("#feedback_category_wrong").html("");
        })
    }
    if (feedback.value == "") {
        $(document).ready(function () {
            $("#feedback_wrong").html("Please input your feedback");
        })
        feedback.focus();
        return false;
    }
    $(document).ready(function () {
        $("#form_success").css("z-index", "2").css("opacity", "1");
        $("#username_login").html("Thank you for your feedback");
    })
    return false;
}

function feedback_click() {
    document.getElementById("form_popup").style.opacity = "1";
    document.getElementById("form_popup").style.zIndex = "1";
}

function x_button_click() {
    document.getElementById("form_popup").style.opacity = "0";
    document.getElementById("form_popup").style.zIndex = "-1";
    document.getElementById("form_popup").reset();
    $(document).ready(function () {
        $("#icon1").attr("class", "icon");
        $("#icon2").attr("class", "icon");
        $("#icon3").attr("class", "icon");
        $("#button1").attr("class", "button");
        $("#button2").attr("class", "button");
        $("#button3").attr("class", "button");
        $("#feedback_wrong").html("");
        $("#email").css("border-left", "2px solid #db295550  ");
        $("#email_wrong").html("");
        $("#opinion_wrong").html("");
        $("#feedback_category_wrong").html("");
        button_condition = false;
        icon_condition = false;

    })
}

$(document).ready(function () {
    $("#email").bind("input propertychange blur", function () {
        var emailparttern = /^[A-z]\w*([\.\-_]\w+)*@\w+([\.\-_]\w+)*(\.\w{3})+(\.\w{2})?|^$/;
        var email = document.getElementById("email");
        if (emailparttern.test(email.value) == false) {
            $("#email").css("border-left", "2px solid red");
            $("#email_wrong").html("Wrong email format");
        }
        else {
            $("#email").css("border-left", "2px solid #db295550  ");
            $("#email_wrong").html("");
        }
    })

    //Thay đổi trạng thái Icon khi event Click thực hiện.

    $("#icon1").click(function () {
        $("#icon1").toggleClass("icon_hover");
        $("#icon2").attr("class", "icon");
        $("#icon3").attr("class", "icon");
        icon_condition = true;
    })

    $("#icon2").click(function () {
        $("#icon2").toggleClass("icon_hover");
        $("#icon1").attr("class", "icon");
        $("#icon3").attr("class", "icon");
        icon_condition = true;
    })

    $("#icon3").click(function () {
        $("#icon3").toggleClass("icon_hover");
        $("#icon2").attr("class", "icon");
        $("#icon1").attr("class", "icon");
        icon_condition = true;
    })

    //Thay đổi trạng thái Button khi event Click thực hiện

    $("#button1").click(function (e) {
        e.preventDefault(); //Chặn không cho Button thực hiện các lệnh được Default sẵn.
        $("#button1").toggleClass("button_hover");
        $("#button2").attr("class", "button");
        $("#button3").attr("class", "button");
        button_condition = true;
    })

    $("#button2").click(function (e) {
        e.preventDefault(); //Chặn không cho Button thực hiện các lệnh được Default sẵn.
        $("#button2").toggleClass("button_hover");
        $("#button1").attr("class", "button");
        $("#button3").attr("class", "button");
        button_condition = true;
    })

    $("#button3").click(function (e) {
        e.preventDefault(); //Chặn không cho Button thực hiện các lệnh được Default sẵn.
        $("#button3").toggleClass("button_hover");
        $("#button1").attr("class", "button");
        $("#button2").attr("class", "button");
        button_condition = true;
    })

})

//User Popup

function user_click(){
    document.getElementById("user_popup").style.opacity = "1";
    document.getElementById("user_popup").style.zIndex = "2";
}

function x_user_button_click(){
    document.getElementById("user_popup").style.opacity = "0";
    document.getElementById("user_popup").style.zIndex = "-2";
}

$(document).ready(function(){
    $("#user_popup_login").click(function(){
        location.href = "dangnhap.html";
    });

    $("#user_popup_signin").click(function(){
        location.href = "dangky.html";
    });
})