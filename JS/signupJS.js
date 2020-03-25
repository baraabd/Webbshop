import { makeRequest } from "./requestHandler.js"
var selected_value

function addEventListeners() {
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
}


$(document).ready(function() {
    $('#my_radio_box').change(function() {
        selected_value = $("input[name='role']:checked").val();
    });
});


export function signUpSubmit(event) {
    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addUser");
    myData.append("firstname", document.querySelector('input[name=firstname]').value)
    myData.append("lastname", document.querySelector('input[name=lastname]').value)
    myData.append("email", document.querySelector('input[name=email]').value)
    myData.append("password", document.querySelector('input[name=userPwdInput]').value)
    myData.append("role", selected_value)
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