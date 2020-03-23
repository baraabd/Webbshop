import { makeRequest } from "./requestHandler.js"


export function newsSubscribe(event) {
    var myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "addSubscriber");
    myData.append("inloggedUserID", sessionStorage.getItem("inloggedUserID"))
    myData.append("firstname", document.querySelector('input[name=firstname]').value)
    myData.append("lastname", document.querySelector('input[name=lastname]').value)
    myData.append("email", document.querySelector('input[name=email]').value)

    makeRequest("../API/recivers/newsletterReciver.php", "POST", myData, (result) => {
        console.log(result)
        document.querySelector('input[name=firstname]').value = ""
        document.querySelector('input[name=lastname]').value = ""
        document.querySelector('input[name=email]').value = ""
    })
}