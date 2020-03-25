import { makeRequest } from "./requestHandler.js"



export function login() {
    let userName = document.getElementById("username").value
    let password = document.getElementById("password").value

    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "loginUser");
    myData.append("userName", userName)
    myData.append("password", password)

    makeRequest("../API/recivers/userReciver.php", "POST", myData, (result) => {
        if (result.success) {
            sessionStorage.setItem("inloggedUserId", result.inloggedUserId)

            // Admin ansvar har läg till den har koden för att gå till admin sida
            if (result[0].Role == "Admin" && result[0].Active == 1) {

                sessionStorage.setItem("adminName", result.FirstName)
                window.location.pathname = 'admin.html';
                ///////////////////////////////////////////
            }
            console.log(result)
        } else {
            console.log("Wrong inlogg info")
        }
        location.href = "./start.html"
    })
}