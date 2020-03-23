import { makeRequest } from "./requestHandler.js"
let cartList = JSON.parse(sessionStorage.getItem("cart"));
export function getProducts() {
    let myData = new FormData();
    myData.append("entity", "products");
    myData.append("endpoint", "getAllProducts");
    makeRequest("../API/recivers/productReciver.php", "GET", null, (result) => {

        let productContainer = document.getElementById("allProducts")

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const productBox = document.createElement("div");
            productBox.classList = "productBox"

            const productName = document.createElement('div');
            productName.innerText = product.ProductName
            productName.classList = "prodName"
            productBox.append(productName)

            const pic = document.createElement('img');
            pic.src = product.CoverPicture
            pic.classList = "productPic"
            productBox.append(pic)

            const productDescp = document.createElement('div');
            productDescp.innerText = product.Description
            productDescp.classList = "prodDescb"
            productBox.append(productDescp)

            const price = document.createElement('div');
            price.innerText = product.Price + " " + "SEK"
            price.classList = "productPris"
            productBox.append(price)


            const button = document.createElement('button');
            button.innerText = 'Buy'
            button.classList = 'shopBtn'
            button.data = product
            button.onclick = function() {
                toCart(this.data)
                count(cartList.length)
            }
            productBox.append(button)

            productContainer.append(productBox)
        }
    })
}

export function getXboxProducts() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getXboxProducts");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {

        let thisContainer = document.getElementById("allProducts")
        thisContainer.innerText = ""

        let xboxBox = document.getElementById("allProducts")

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const xboxProductBox = document.createElement("div");
            xboxProductBox.classList = "productBox"

            const xboxProductName = document.createElement('div');
            xboxProductName.innerText = product.ProductName
            xboxProductName.classList = "prodName"
            xboxProductBox.append(xboxProductName)

            const xboxPic = document.createElement('img');
            xboxPic.src = product.CoverPicture
            xboxPic.classList = "productPic"
            xboxProductBox.append(xboxPic)

            const xboxPrice = document.createElement('div');
            xboxPrice.innerText = product.Price + " " + "SEK"
            xboxPrice.classList = "productPris"
            xboxProductBox.append(xboxPrice)

            const xboxDescrip = document.createElement('div');
            xboxDescrip.innerText = product.Description
            xboxDescrip.classList = "prodDescb"
            xboxProductBox.append(xboxDescrip)

            const xboxButton = document.createElement('button');
            xboxButton.innerText = 'Buy'
            xboxButton.classList = 'shopBtn'
            xboxButton.data = product
            xboxButton.onclick = function() {
                toCart(this.data)
                count(cartList.length)
            }
            xboxProductBox.append(xboxButton)

            xboxBox.append(xboxProductBox)
        }
    })
}
export function getPS4Products() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getPS4Products");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {

        let thisContainerTo = document.getElementById("allProducts")
        thisContainerTo.innerText = ""

        let ps4Box = document.getElementById("allProducts")
            /*  ps4Box.classList = "categoryClass" */

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const ps4ProductBox = document.createElement("div");
            ps4ProductBox.classList = "productBox"

            const ps4ProductName = document.createElement('div');
            ps4ProductName.innerText = product.ProductName
            ps4ProductName.classList = "prodName"
            ps4ProductBox.append(ps4ProductName)

            const ps4Descrip = document.createElement('div');
            ps4Descrip.innerText = product.Description
            ps4Descrip.classList = "prodDescb"
            ps4ProductBox.append(ps4Descrip)

            const ps4Pic = document.createElement('img');
            ps4Pic.src = product.CoverPicture
            ps4Pic.classList = "productPic"
            ps4ProductBox.append(ps4Pic)

            const ps4Price = document.createElement('div');
            ps4Price.innerText = product.Price + " " + "SEK"
            ps4Price.classList = "productPris"
            ps4ProductBox.append(ps4Price)

            const ps4Button = document.createElement('button');
            ps4Button.innerText = 'Buy'
            ps4Button.classList = 'shopBtn'
            ps4Button.data = product
            ps4Button.onclick = function() {
                toCart(this.data)
                count(cartList.length)
            }
            ps4ProductBox.append(ps4Button)

            ps4Box.append(ps4ProductBox)
        }
    })
}

export function getPCProducts() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getPCProducts");
    makeRequest("../API/recivers/productReciver.php", "POST", myData, (result) => {

        let andThisAlso = document.getElementById("allProducts")
        andThisAlso.innerText = ""

        let pcBox = document.getElementById("allProducts")

        if (cartList) {
            count(cartList.length);
        }

        for (let i = 0; i < result.length; i++) {
            const product = result[i]
            const pcProductBox = document.createElement("div");
            pcProductBox.classList = "productBox"

            const pcProductName = document.createElement('div');
            pcProductName.innerText = product.ProductName
            pcProductName.classList = "prodName"
            pcProductBox.append(pcProductName)

            const pcDescrip = document.createElement('div');
            pcDescrip.innerText = product.Description
            pcDescrip.classList = "prodDescb"
            pcProductBox.append(pcDescrip)

            const pcPic = document.createElement('img');
            pcPic.src = product.CoverPicture
            pcPic.classList = "productPic"
            pcProductBox.append(pcPic)

            const pcPrice = document.createElement('div');
            pcPrice.innerText = product.Price + " " + "SEK"
            pcPrice.classList = "productPris"
            pcProductBox.append(pcPrice)

            const pcButton = document.createElement('button');
            pcButton.innerText = 'Buy'
            pcButton.classList = 'shopBtn'
            pcButton.data = product
            pcButton.onclick = function() {
                toCart(this.data)
                count(cartList.length)
            }
            pcProductBox.append(pcButton)

            pcBox.append(pcProductBox)
        }
    })
}


function toCart(product) {
    if (cartList) {
        cartList.push(product);
        count(cartList.length);
    } else {
        cartList = [];
        cartList.push(product);
    }
    sessionStorage.setItem("cart", JSON.stringify(cartList));
}

export function count(length) {
    if (cartList) {
        document.getElementById("counter").innerText = cartList.length;
    }
    if (length === 0) {
        document.getElementById("counter").innerText = "";
    }
}