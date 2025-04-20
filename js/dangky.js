function formvalid2() {
    var usernameparttern = /^\w{6,10}$/;
    var username = document.getElementById("username");
    if (username.value == "") {
        $("#username").css("border-left", "2px solid red");
        $("#username_wrong").html("Please enter your username");
        username.focus();
        return false;
    }
    else
        if (usernameparttern.test(username.value) == false) {
            $("#username").css("border-left", "2px solid red");
            $("#username_wrong").html("Please enter from 6 to 10 characters");
            username.focus();
            return false;
        }
        else {
            $("#username").css("border-left", "2px solid LimeGreen");
            $("#username_wrong").html("");
        }


    var email1parttern = /^[A-z]\w*([\.\-_]\w+)*@\w+([\.\-_]\w+)*(\.\w{3})+(\.\w{2})?$/;
    var email1 = document.getElementById("email1");
    if (email1.value == "") {
        $("#email1").css("border-left", "2px solid red");
        $("#email1_wrong").html("Please enter your email");
        email1.focus();
        return false;
    }
    else
        if (email1parttern.test(email1.value) == false) {
            $("#email1").css("border-left", "2px solid red");
            $("#email1_wrong").html("Wrong email format");
            email1.focus();
            return false;

        }
        else {
            $("#email1").css("border-left", "2px solid LimeGreen  ");
            $("#email1_wrong").html("");
        }

    var passwordparttern = /^\w{8,}$/;
    var password = document.getElementById("password");
    if (password.value == "") {
        $("#password").css("border-left", "2px solid red");
        $("#password_wrong").html("Please enter your password");
        password.focus();
        return false;
    }
    else
        if (passwordparttern.test(password.value) == false) {
            $("#password").css("border-left", "2px solid red");
            $("#password_wrong").html("Please enter at least 8 characters");
            password.focus();
            return false;
        }
        else {
            $("#password").css("border-left", "2px solid LimeGreen  ");
            $("#password_wrong").html("");
        }

    var repassword = document.getElementById("repassword");
    if (repassword.value == "") {
        $("#repassword").css("border-left", "2px solid red");
        $("#repassword_wrong").html("Please confirm your password");
        repassword.focus();
        return false;
    }
    else
        if (repassword.value != password.value) {
            $("#repassword").css("border-left", "2px solid red");
            $("#repassword_wrong").html("Wrong password");
            repassword.focus();
            return false;
        }
        else {
            $("#repassword").css("border-left", "2px solid LimeGreen ");
            $("#repassword_wrong").html("");
        }


    var month = document.getElementById("month");
    if (month.value == "") {
        $("#month").css("border-left", "2px solid red");
        $("#month_wrong").html("Please choose your month of birth");
        month.focus();
        return false;
    }
    else {
        $("#month").css("border-left", "2px solid LimeGreen ");
        $("#month_wrong").html("");
    }

    var day = document.getElementById("day");
    if (day.value == "") {
        $("#day").css("border-left", "2px solid red");
        $("#day_wrong").html("Please choose your day of birth");
        day.focus();
        return false;
    }
    else {
        $("#day").css("border-left", "2px solid LimeGreen ");
        $("#day_wrong").html("");
    }

    var year = document.getElementById("year");
    if (year.value == "") {
        $("#year").css("border-left", "2px solid red");
        $("#year_wrong").html("Please choose your year of birth");
        year.focus();
        return false;
    }
    else {
        $("#year").css("border-left", "2px solid LimeGreen ");
        $("#year_wrong").html("");
    }

    var gender = document.getElementById("gender");
    if (gender.value == "") {
        $("#gender").css("border-left", "2px solid red");
        $("#gender_wrong").html("Please choose your gender");
        gender.focus();
        return false;
    }
    else {
        $("#gender").css("border-left", "2px solid LimeGreen ");
        $("#gender_wrong").html("");
    }

    var country = document.getElementById("country");
    if (country.value == "") {
        $("#country").css("border-left", "2px solid red");
        $("#country_wrong").html("Please choose your country");
        country.focus();
        return false;
    }
    else {
        $("#country").css("border-left", "2px solid LimeGreen ");
        $("#country_wrong").html("");
    }

    if (document.getElementById("agreement").checked == false) {
        $("#agreement").css("border-left", "2px solid red");
        $("#agreement_wrong").html("Please agree with our Agreement to coutinue");
        agreement.focus();
        return false;
    }
    $(document).ready(function () {
        $("#form_success").css("z-index", "2").css("opacity", "1");
        $("#username_login").html("All your information are corrected");
    })
    return false;
}

$(document).ready(function () {
    $("#username").bind("input propertychange blur", function () {
        var usernameparttern = /^\w{6,10}$/;
        var username = document.getElementById("username");
        if (username.value == "") {
            $("#username").css("border-left", "2px solid red");
            $("#username_wrong").html("Please enter your username");
        }
        else
            if (usernameparttern.test(username.value) == false) {
                $("#username").css("border-left", "2px solid red");
                $("#username_wrong").html("Please enter from 6 to 10 characters");

            }
            else {
                $("#username").css("border-left", "2px solid LimeGreen");
                $("#username_wrong").html("");
                username_condition == true;
            }
    })

    $("#email1").bind("input propertychange blur", function () {
        var email1parttern = /^[A-z]\w*([\.\-_]\w+)*@\w+([\.\-_]\w+)*(\.\w{3})+(\.\w{2})?$/;
        var email1 = document.getElementById("email1");
        if (email1.value == "") {
            $("#email1").css("border-left", "2px solid red");
            $("#email1_wrong").html("Please enter your email");
        }
        else
            if (email1parttern.test(email1.value) == false) {
                $("#email1").css("border-left", "2px solid red");
                $("#email1_wrong").html("Wrong email format");

            }
            else {
                $("#email1").css("border-left", "2px solid LimeGreen  ");
                $("#email1_wrong").html("");
            }
    })

    $("#password").bind("input propertychange blur", function () {
        var passwordparttern = /^\w{8,}$/;
        var password = document.getElementById("password");
        if (password.value == "") {
            $("#password").css("border-left", "2px solid red");
            $("#password_wrong").html("Please enter your password");
        }
        else
            if (passwordparttern.test(password.value) == false) {
                $("#password").css("border-left", "2px solid red");
                $("#password_wrong").html("Please enter at least 8 characters");

            }
            else {
                $("#password").css("border-left", "2px solid LimeGreen  ");
                $("#password_wrong").html("");
            }
    })

    $("#repassword").bind("input propertychange blur", function () {
        var repassword = document.getElementById("repassword");
        if (repassword.value == "") {
            $("#repassword").css("border-left", "2px solid red");
            $("#repassword_wrong").html("Please confirm your password");
        }
        else
            if (repassword.value != password.value) {
                $("#repassword").css("border-left", "2px solid red");
                $("#repassword_wrong").html("Wrong password");

            }
            else {
                $("#repassword").css("border-left", "2px solid LimeGreen ");
                $("#repassword_wrong").html("");
            }
    })

    $("#day").bind("input propertychange blur", function () {
        var day = document.getElementById("day");
        if (day.value == "") {
            $("#day").css("border-left", "2px solid red");
            $("#day_wrong").html("Please choose your day of birth");
        }
        else {
            $("#day").css("border-left", "2px solid LimeGreen ");
            $("#day_wrong").html("");
        }
    })

    $("#month").bind("input propertychange blur", function () {
        var month = document.getElementById("month");
        if (month.value == "") {
            $("#month").css("border-left", "2px solid red");
            $("#month_wrong").html("Please choose your month of birth");
        }
        else {
            $("#month").css("border-left", "2px solid LimeGreen ");
            $("#month_wrong").html("");
        }
    })

    $("#year").bind("input propertychange blur", function () {
        var year = document.getElementById("year");
        if (year.value == "") {
            $("#year").css("border-left", "2px solid red");
            $("#year_wrong").html("Please choose your year of birth");
        }
        else {
            $("#year").css("border-left", "2px solid LimeGreen ");
            $("#year_wrong").html("");
        }
    })

    $("#gender").bind("input propertychange blur", function () {
        var gender = document.getElementById("gender");
        if (gender.value == "") {
            $("#gender").css("border-left", "2px solid red");
            $("#gender_wrong").html("Please choose your gender");
        }
        else {
            $("#gender").css("border-left", "2px solid LimeGreen ");
            $("#gender_wrong").html("");
        }
    })

    $("#country").bind("input propertychange blur", function () {
        var country = document.getElementById("country");
        if (country.value == "") {
            $("#country").css("border-left", "2px solid red");
            $("#country_wrong").html("Please choose your country");
        }
        else {
            $("#country").css("border-left", "2px solid LimeGreen ");
            $("#country_wrong").html("");
        }
    })

    $("#agreement").bind("input propertychange blur", function () {
        if (document.getElementById("agreement").checked == false) {
            $("#agreement_wrong").html("Please agree with our Agreement to coutinue");
        }
        else {
            $("#agreement_wrong").html("");
        }
    })
})

//Feedback Popup

var icon_condition = false;
var button_condition = false;

function formvalid() {
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

function user_click() {
    document.getElementById("user_popup").style.opacity = "1";
    document.getElementById("user_popup").style.zIndex = "2";
}

function x_user_button_click() {
    document.getElementById("user_popup").style.opacity = "0";
    document.getElementById("user_popup").style.zIndex = "-2";
}

$(document).ready(function () {
    $("#user_popup_login").click(function () {
        location.href = "dangnhap.html";
    });

    $("#user_popup_signin").click(function () {
        location.href = "dangky.html";
    });
})