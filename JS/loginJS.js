import { makeRequest } from "./requestHandler.js"

export function login() {
    let userName = document.getElementById("username").value
    let password = document.getElementById("password").value
    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "loginAdmin");
    myData.append("userName", userName)
    myData.append("password", password)
    makeRequest("./../API/recivers/userReciver.php", "POST", myData, (result) => {
        console.log(result)
        if (result[0].Role == "Admin" && result[0].Active == 1) {
            sessionStorage.setItem("adminName", result[0].FirstName + " " + result[0].LastName)
            window.location.pathname = 'admin.html';
        }
    })
}

///////Grupp 2 som har skrivit

/* export function login() {
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
} */