import { makeRequest } from "./requestHandler.js"

window.onload = init()

function init() {
    loadOrdersOnload()

}

let resultFromGetOrders

function loadOrdersOnload() {
    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "getOrdersToMyPages");
    myData.append("inloggedUserId", sessionStorage.getItem("inloggedUserId"));
    makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
        resultFromGetOrders = result
        renderOrdersData()
        console.log(result)
    })
}

function renderOrdersData() {

    let arrayWithAllOrders = []
    let arrayForOneOrder = []

    for (let i = 0; i < resultFromGetOrders.length; i++) {
        let order = resultFromGetOrders[i]

        let shouldPush = true
        let theSpecificInfoForProductOfOrder = {}

        for (let j = 0; j < arrayWithAllOrders.length; j++) {
            if (order.OrderID == arrayWithAllOrders[j][0].OrderID) {
                shouldPush = false
                theSpecificInfoForProductOfOrder.ProductID = order.ProductID
                theSpecificInfoForProductOfOrder.Quantity = order.Quantity
                theSpecificInfoForProductOfOrder.UnitPrice = order.UnitPrice
                arrayWithAllOrders[j].push(theSpecificInfoForProductOfOrder)
                arrayWithAllOrders[j][0].orderTotalPrice += order.UnitPrice * order.Quantity

            }

        }
        if (shouldPush == true) {
            let theGeneralInfoForiOrder = {}
            theGeneralInfoForiOrder.OrderID = order.OrderID
            theGeneralInfoForiOrder.OrderDate = order.OrderDate
            theGeneralInfoForiOrder.UserID = order.UserID
            theGeneralInfoForiOrder.ShipperID = order.ShipperID
            theGeneralInfoForiOrder.Recieved = order.Recieved
            theGeneralInfoForiOrder.Shipped = order.Shipped
            theGeneralInfoForiOrder.orderTotalPrice = order.Quantity * order.UnitPrice
            arrayForOneOrder.push(theGeneralInfoForiOrder)
            theSpecificInfoForProductOfOrder.ProductID = order.ProductID
            theSpecificInfoForProductOfOrder.Quantity = order.Quantity
            theSpecificInfoForProductOfOrder.UnitPrice = order.UnitPrice
            arrayForOneOrder.push(theSpecificInfoForProductOfOrder)
        }

        if (arrayForOneOrder.length) {
            arrayWithAllOrders.push(arrayForOneOrder)
            arrayForOneOrder = []
        }

    }
    let ordersContainer = document.getElementById("ordersContainer")
    for (let i = 0; i < arrayWithAllOrders.length; i++) {
        const generalInfoDiv = document.createElement("div")
        generalInfoDiv.classList = "generalInfo"
        let paraFOrProdid = document.createElement("p")
        paraFOrProdid.innerText = "Order#" + " " + arrayWithAllOrders[i][0].OrderID
        let paraFOrProddate = document.createElement("p")
        paraFOrProddate.innerText = "Orderdate:" + " " + arrayWithAllOrders[i][0].OrderDate
        let recivedButton = document.createElement("Button")
        recivedButton.classList = "button"
        recivedButton.onclick = function thisOrderIsRecived() {
            thisOrderIsReceived(arrayWithAllOrders[i][0].OrderID)
        }
        if (arrayWithAllOrders[i][0].Recieved == 0) {
            recivedButton.innerHTML = "Push if Received" + " " + "Order#" + arrayWithAllOrders[i][0].OrderID
        } else {
            recivedButton.style.display = "None"
        }

        let paraFOrProdShipped = document.createElement("p")
        if (arrayWithAllOrders[i][0].Shipped == 0) {
            paraFOrProdShipped.innerText = "Shipped Order:" + " " + "No"

        } else {
            paraFOrProdShipped.innerText = "Yes"
        }

        let paraFOrProdorderTotalPrice = document.createElement("p")
        paraFOrProdorderTotalPrice.classList = "totalPrice"
        paraFOrProdorderTotalPrice.innerText = "Total price for this order:" + " " + arrayWithAllOrders[i][0].orderTotalPrice + " " + "SEK"
            /* let mywholeorderDic = document.createElement("h5")
            mywholeorderDic.innerText = "this is the main div" */
        generalInfoDiv.append(paraFOrProdid)
        generalInfoDiv.append(paraFOrProddate)

        generalInfoDiv.append(recivedButton)
        generalInfoDiv.append(paraFOrProdShipped)

        generalInfoDiv.append(paraFOrProdorderTotalPrice)
            /* generalInfoDiv.append(mywholeorderDic) */

        ordersContainer.append(generalInfoDiv)

        for (let j = 1; j < arrayWithAllOrders[i].length; j++) {
            let specOrderInfo = document.createElement("div")
            specOrderInfo.classList = "orderBox"
            ordersContainer.append(specOrderInfo)

            let paraFOrProdProductID = document.createElement("p")
            paraFOrProdProductID.innerText = arrayWithAllOrders[i][j].ProductID
            if (arrayWithAllOrders[i][j].ProductID <= 4) {
                paraFOrProdProductID.innerText = "Xbox Game"
            }
            if (arrayWithAllOrders[i][j].ProductID >= 5) {
                paraFOrProdProductID.innerText = "PS4 Game"
            }
            if (arrayWithAllOrders[i][j].ProductID >= 9) {
                paraFOrProdProductID.innerText = "PC Game"
            }
            let paraFOrProdProductQuantity = document.createElement("p")
            paraFOrProdProductQuantity.innerText = "Quantity" + " " + arrayWithAllOrders[i][j].Quantity
            let paraFOrProdProductUnitPrice = document.createElement("p")
            paraFOrProdProductUnitPrice.innerText = arrayWithAllOrders[i][j].UnitPrice + " " + "SEK"

            specOrderInfo.append(paraFOrProdProductID)
            specOrderInfo.append(paraFOrProdProductQuantity)
            specOrderInfo.append(paraFOrProdProductUnitPrice)
        }


        ordersContainer.append(generalInfoDiv)

    }




}

function thisOrderIsReceived(theReceivedOrderId) {

    let myData = new FormData();
    myData.append("entity", "enjoy");
    myData.append("endpoint", "theOrderIsReceived");
    myData.append("theReceivedOrderId", theReceivedOrderId);
    makeRequest("../API/recivers/orderReciver.php", "POST", myData, (result) => {
        console.log(result)
        location.reload()
    })


}