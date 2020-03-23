import { makeRequest } from "./requestHandler.js"
import { getXboxProducts } from "./productJS.js"
import { getPS4Products } from "./productJS.js"
import { getPCProducts } from "./productJS.js"

export function getCategories() {

    makeRequest("../API/recivers/categoryReciver.php", "GET", null, (result) => {

        var catDiv = document.getElementById("categories")

        for (var i = 0; i < result.length; i++) {
            const title = document.createElement("p");
            title.innerText = result[i].CategoryName
            if (title.innerText == "Xbox") {
                title.onclick = getXboxProducts
            } else if (title.innerText == "PS4") {
                title.onclick = getPS4Products
            } else if (title.innerText == "PC") {
                title.onclick = getPCProducts
            }
            catDiv.append(title)
        }
    })
}