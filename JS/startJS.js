import { getProducts } from "./productJS.js"
import { getCategories } from "./categoryJS.js"
import { makeRequest } from "./requestHandler.js"
import { count } from "./productJS.js"

let myPagesIcon = document.getElementsByClassName("userIcon")[0]
let authentication = document.getElementById("authentication")
let signOutButton = document.getElementById("signOut")
if (sessionStorage.inloggedUserId && sessionStorage.inloggedUserId != "") {
    myPagesIcon.style.display = "inherit"
    authentication.style.display = "none"

    signOutButton.style.display = "inherit"
} else {
    myPagesIcon.style.display = "none"
    signOutButton.style.display = "none"

}

window.onload = init()

function init() {
    getProducts()
    getCategories()
    checkInloggedUser()
    count()
}

function checkInloggedUser() {
    makeRequest("../API/recivers/userReciver.php", "GET", null, (result) => {
        console.log(result)
        let userName = result
        let welcomeText = document.getElementById("welcome")
        if (sessionStorage.inloggedUserId && sessionStorage.inloggedUserId != "") {
            welcomeText.innerText = userName
        }
        if (!sessionStorage.inloggedUserId && sessionStorage.inloggedUserId != "") {
            welcomeText.innerText = ""
        }
    })
}