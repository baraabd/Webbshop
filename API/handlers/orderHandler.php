<?php

include("./../classes/orderClass.php");
include("./../handlers/orderDetailsHandler.php");
include("./../classes/productClass.php");


function getAllOrders() {       
       $Order = new Order();
       $result = $Order->fetchAll();
       return $result;
};


function addorder($UserID, $OrderDate, $ShipperID, $orderProducts) {
       $order = new Order(null, $UserID, $OrderDate, $ShipperID);
       $orderIdInOrders = $order->insert();

       $newOrder = array();
       $explodedArray = explode(',',$orderProducts);
       $z = 2; 
       for ($i = 0; $i < count($explodedArray); $i++) {
              if($i == $z) {
                     $z= $z + 3;
             } else {
                    $oneproduct = array();
                    // $oneproduct = array("id"=>$explodedArray[$z - 2],"qauntity"=>$explodedArray[$z - 1],
                    // "price"=>$explodedArray[$z]);
                    $resultFromDetails = addOrderDetails($orderIdInOrders, $explodedArray[$z - 2], $explodedArray[$z - 1], $explodedArray[$z]);
                    $testis = updateLagreSaldo($explodedArray[$z - 2], $explodedArray[$z - 1]);
                    array_push($newOrder, $oneproduct);
                    unset($oneproduct);
                    $i++;
             }
      }
      
      return true;
};

function getOrdersToMyPages($inloggedUserId) {
       $fromOrder = new Order();
       $flexQuery = "SELECT * FROM orders
       INNER JOIN order_details
       ON order_details.OrderID = orders.OrderID
       WHERE userId = :userId;";
       $flexArray = array(":userId"=>$inloggedUserId);

       $result = $fromOrder->flexFunction($flexQuery, $flexArray);
       return $result;
}

function setThisAsReceived($orderId) {
       $receivedOrder = new Order();
       $flexQuery = "UPDATE orders SET Recieved = :Recieved
       WHERE OrderID = :OrderID;";
       $flexArray = array(":OrderID"=>$orderId, ":Recieved"=>1);
       $receivedOrder->flexFunction($flexQuery, $flexArray);

       return true;
}

function updateLagreSaldo($productId, $quantity) {
       $getOldQuantity = new Product();
       $getQuantityQuery = "SELECT UnitInStock FROM Products WHERE ProductID = :productId;";
       $getQuantityArrayQuery = array(":productId"=>$productId);
       
       $theOldQuantity = $getOldQuantity->flexFunction($getQuantityQuery, $getQuantityArrayQuery);
       
       $theNewQuantity = (int)$theOldQuantity[0]["UnitInStock"] - (int)$quantity;

       $productToMinus = new Product();
       $flexQuery = "UPDATE Products SET UnitInStock = :UnitInStock
       WHERE ProductID = :ProductID;";
       $flexArray = array(":ProductID"=>$productId, ":UnitInStock"=>$theNewQuantity);
       $productToMinus->flexFunction($flexQuery, $flexArray);
}


function updateOrder($OrderID, $OrderDate, $UserID, $ShipperID, $Recieved, $Shipped) {   
       $Order = new Order($OrderID, $OrderDate, $UserID, $ShipperID, $Recieved, $Shipped);
       
       $result = $Order->update();  

       if (empty($result)) {
           throw new Exception("No Order Handlar found", 404);
           exit;
       }
       
       return $result;
};

function getAllOrderShiped()
{
    $Order = new Order();
    $result = $Order->fetchOrderShiped();    
    if (empty($result)) {
        throw new Exception("No Order found", 404);
        exit;
    }    
    return $result;
};

function getAllorderBinding()
{
    $Order = new Order();
    $result = $Order->fetchOrderBinding();    
    if (empty($result)) {
        throw new Exception("No Order found", 404);
        exit;
    }    
    return $result;
};

?>