
function checkform() {
    var nameaccess = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var mobile = document.getElementById("numberphone").value;
    var nation = document.getElementById("nation").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("comfirm-pass").value;
    var policyChecked = document.getElementById("policy").checked;
    var namePattern = /^[a-zA-Z0-9]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobilePattern = /^0[0-9]{9,10}$/;
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (nameaccess === "") {
        alert("Vui lòng nhập tên truy cập");
        return false;
    } else if (!namePattern.test(nameaccess)) {
        alert("Tên truy cập chỉ được chứa chữ cái và số, không chứa ký tự đặc biệt");
        return false;
    }

    if (email === "") {
        alert("Vui lòng nhập email");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Vui lòng nhập email hợp lệ");
        return false;
    }

    if (mobile === "") {
        alert("Vui lòng nhập số di động");
        return false;
    } else if (!mobilePattern.test(mobile)) {
        alert("Số di động phải bắt đầu bằng số 0 và chứa 10 hoặc 11 chữ số");
        return false;
    }
    if (nation === "") {
        alert("Vui lòng chọn quốc gia");
        return false;
    }
    if (pass === "") {
        alert("Vui lòng nhập mật khẩu");
        return false;
    } else if (!passPattern.test(pass)) {
        alert("Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số");
        return false;
    }

    if (confirmpass === "") {
        alert("Vui lòng nhập xác nhận mật khẩu");
        return false;
    } else if (confirmpass !== pass) {
        alert("Xác nhận mật khẩu không khớp");
        return false;
    }
    if (!policyChecked) { 
        alert("Bạn cần đồng ý với các điều khoản và chính sách bảo mật để đăng nhập");
        return false;
    }
    
    alert("Đăng ký thành công!");
    return true;
}

document.querySelector(".style-button").addEventListener("click", function (event) {
    event.preventDefault();
    if (checkform()) {
        window.location.href = "/Tiki.vn/Home/HTML/signin.html"; 
    }
});