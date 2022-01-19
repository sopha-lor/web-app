const check_login = localStorage.getItem("login-id");
if (check_login != null) {
    window.location.href = "/";
}