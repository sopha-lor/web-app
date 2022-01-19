const app_api = "http://134.209.102.154/admin-api/";

function function_login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", app_api + "company-login");
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(
            JSON.stringify({
                email: email,
                password: password,
            })
        );
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                const object = JSON.parse(this.responseText);
                console.log(object);
                if (object["accessToken"]) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: '<span class="lao-font">Login ສຳເລັດ</span>',
                        showConfirmButton: false,
                        timer: 1500,
                    }).then((result) => {
                        localStorage.setItem("login-id", object["accessToken"]);
                        window.location.href = "/";
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: '<span class="lao-font">ລົ້ມແຫຼວ</span>',
                        html: '<span class="lao-font text-danger">email ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ</span>',
                    });
                }
            }
        };
    } catch (error) {}
    return false;
}

function logout() {
    localStorage.removeItem("login-id");
    window.location.href = "./login.html";
}