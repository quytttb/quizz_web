//Kiểm tra mật khẩu mạnh
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("input_Password");
    if (pwd.value.length === 0) {
        strength.innerHTML = 'Bạn chưa nhập mật khẩu';
    } else if (false === enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'Nhập thêm mật khẩu';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Mạnh</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Trung bình</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Yếu</span>';
    }
}
//check email
function checkEmail() {
    var email = document.getElementById("input_Email");
    var email_regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    if (email.value.length === 0) {
        document.getElementById("check_Email").innerHTML = 'Bạn chưa nhập email';
    } else if (!email_regex.test(email.value)) {
        document.getElementById("check_Email").innerHTML = 'Email không hợp lệ';
    } else {
        document.getElementById("check_Email").innerHTML = 'Email hợp lệ';
    }
}

//check repassword button disabled
function checkRepassword() {
    var pass = document.getElementById("input_Password").value;
    var repass = document.getElementById("input_rePassword").value;
    var checkRePass = document.getElementById('checkRePass');
    var buttonSubbmit = document.getElementById('btn_Submit');
    if (repass.length === 0) {
        checkRePass.innerHTML = 'Bạn chưa nhập lại mật khẩu';
        buttonSubbmit.disabled = true;
    }
    else if(pass !== repass)
    {
        checkRePass.innerHTML = '<span style="color:red">Mật khẩu không khớp</span>';
        buttonSubbmit.disabled = true;
    }
    else {
        checkRePass.innerHTML = '<span style="color:green">Mật khẩu khớp</span>';
        buttonSubbmit.style.backgroundColor = '#f86a57';
        buttonSubbmit.style.color = 'white';
        buttonSubbmit.style.cursor = 'pointer';
        buttonSubbmit.disabled = false;
    }
}

