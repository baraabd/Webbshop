import { makeRequest } from "./requestHandler.js"



export function login() {
    alert("fdsfsd")
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
            console.log(result)
        } else {
            console.log("Wrong inlogg info")
        }
        location.href = "./start.html"
    })
}