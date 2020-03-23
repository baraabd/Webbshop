import { count } from "./productJS.js"
import { makeRequest } from "./requestHandler.js"

let myPagesIcon = document.getElementsByClassName("userIcon")[0]
let signOutButton = document.getElementById("signOut")
if (sessionStorage.inloggedUserId && sessionStorage.inloggedUserId != "") {
    myPagesIcon.style.display = "inherit"
    signOutButton.style.display = "inherit"
} else {
    myPagesIcon.style.display = "none"
    signOutButton.style.display = "none"

}


const submitOrder = document.getElementById("checkout")
submitOrder && submitOrder.addEventListener("click", checkout)

let cartList = JSON.parse(sessionStorage.getItem("cart"));
let cartProductContainer = document.getElementById('cartProducts')
if (cartList && cartList.length) {
    count(cartList.length)

    let totalPrice = 0

    for (let i = 0; i < cartList.length; i++) {
        let product = cartList[i]


        let cartBox = document.createElement('div')
        cartBox.classList = 'productBox'

        const ProductName = document.createElement('p')
        ProductName.innerText = product.ProductName
        cartBox.append(ProductName)

        const CoverPicture = document.createElement('img')
        CoverPicture.src = product.CoverPicture
        CoverPicture.classList = 'productPic'
        cartBox.append(CoverPicture)

        const Price = document.createElement('p')
        Price.innerText = product.Price + " " + "SEK"
        console.log(product.Price)
        cartBox.append(Price)

        const removeProduct = document.createElement('button')
        removeProduct.classList = 'button'
        removeProduct.innerText = "Remove"
        removeProduct.data = i;
        removeProduct.onclick = function() {
            removeItem(this.data);
        }
        cartBox.append(removeProduct)

        cartProductContainer.append(cartBox)

        totalPrice += Number(product.Price)

    }

    let checkContainer = document.getElementById("checkBox")

    let priceText = document.createElement("h2");
    priceText.innerText =
        "Total" + " " + "price:" + " " + totalPrice + " " + "SEK";
    priceText.classList = "totalText";

    checkContainer.appendChild(priceText)
        /* cartBox.append(totalPrice) */

} else {
    let buyText = document.createElement("p")
    buyText.classList = "buyText"
    buyText.innerText = "You have no orders yet :)"

    let container = document.getElementById("checkBox")

    container.appendChild(buyText)
}
console.log(cartList)

function removeItem(index) {
    cartList = JSON.parse(sessionStorage.getItem("cart"));
    cartList.splice(index, 1)
    sessionStorage.setItem("cart", JSON.stringify(cartList))
    document.getElementsByTagName("main")[0].innerHTML = ""
    location.href = "./Cart.html"
}

export function checkout(event) {
    let shippers = document.getElementById("shipper");
    let selectedShipper = shippers.options[shippers.selectedIndex].value;

    const date = new Date();
    let dd = date.getDate();

    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    const orderDate = yyyy + '-' + mm + '-' + dd;

    const ProductIDAndQuantityInCart = []

    for (let i = 0; i < cartList.length; i++) {

        let prod = cartList[i]
        let shouldAdd = true

        for (let z = 0; z < ProductIDAndQuantityInCart.length; z++) {

            if (ProductIDAndQuantityInCart[z][0] == prod.ProductID) {
                ProductIDAndQuantityInCart[z][1]++
                    shouldAdd = false
            }

        }

        if (shouldAdd) {
            ProductIDAndQuantityInCart.push([prod.ProductID, 1, prod.Price])
        }

    }

    addOrder()

    function addOrder() {
        let myData = new FormData();
        myData.append("entity", "enjoy");
        myData.append("endpoint", "addOrder");
        myData.append("orderDate", orderDate)
        myData.append("shipperID", selectedShipper)
        myData.append("orderProducts", ProductIDAndQuantityInCart)
        console.log(myData)

        makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
            console.log(result)
            if (result == true) {
                sessionStorage.removeItem("cart")
                cartProductContainer.innerHTML = ""
                location.reload()
            } else {
                printPassword()

                function printPassword() {
                    var code = Math.random().toString(36)
                    var x = code.substring(2, 10)
                    console.log(x)
                    alert(result + " " + x)
                }
            }
        })
    }
}