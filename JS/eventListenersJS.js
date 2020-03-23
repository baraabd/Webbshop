import { signUpSubmit } from "./signupJS.js"
import { getUsers } from "./adminJS.js"
import { login } from "./loginJS.js"
import { count } from "./productJS.js"
import { newsSubscribe } from "./newsletter.js"
export function addEventListener() {
    const signup = document.getElementById("signUpSubmit")
    signup && signup.addEventListener("click", signUpSubmit)
    const button = document.getElementById("getUsersbtn")
    button && button.addEventListener("click", getUsers)
    const loggain = document.getElementById("login")
    loggain && loggain.addEventListener("click", login)
    const counter = document.getElementById("counter")
    counter && counter.addEventListener("load", count)
    const newsbtnbutton = document.getElementById("newsbtn")
    newsbtnbutton && newsbtnbutton.addEventListener("click", newsSubscribe)
}