import { makeRequest } from "./requestHandler.js"

function addEventListeners() {
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
}

export function signUpSubmit(event) {

    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addUser");
    myData.append("firstname", document.querySelector('input[name=firstname]').value)
    myData.append("lastname", document.querySelector('input[name=lastname]').value)
    myData.append("email", document.querySelector('input[name=email]').value)
    myData.append("password", document.querySelector('input[name=userPwdInput]').value)
    myData.append("role", document.querySelector('input[name=role]').value)
    myData.append("active", "0")

    makeRequest("./../API/recivers/userReciver.php", "POST", myData, (result) => {
        console.log(result)
        alert("You are registered!" + " " + "Click Enjoy and login!")
        document.querySelector('input[name=firstname]').value = ""
        document.querySelector('input[name=lastname]').value = ""
        document.querySelector('input[name=email]').value = ""
        document.querySelector('input[name=userPwdInput]').value = ""
        document.querySelector('input[name=role]').value = ""
    })

}