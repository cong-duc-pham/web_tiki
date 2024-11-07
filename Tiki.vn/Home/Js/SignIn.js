
function checkSignIn(){
    var nameaccess = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var policyChecked = document.getElementById("policy").checked;
    var namePattern = /^[a-zA-Z0-9]+$/;
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (nameaccess === "") {
        alert("Vui lòng nhập tên truy cập");
        return false;
    } else if (!namePattern.test(nameaccess)) {
        alert("Tên truy cập chỉ được chứa chữ cái và số, không chứa ký tự đặc biệt");
        return false;
    }

    if (pass === "") {
        alert("Vui lòng nhập mật khẩu");
        return false;
    } else if (!passPattern.test(pass)) {
        alert("Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số");
        return false;
    }
    if (!policyChecked) { 
        alert("Bạn cần đồng ý với các điều khoản và chính sách bảo mật để đăng nhập");
        return false;
    }

    alert("Đăng nhập thành công!");
    return true;

}
document.querySelector(".style-button").addEventListener("click", function (event) {
    event.preventDefault();
    if (checkSignIn()) {
        window.location.href = "/Tiki.vn/Home/HTML/index-logged-in.html"; 
    }
});