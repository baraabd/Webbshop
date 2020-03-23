<?php

//session_start();

require_once("../classes/orderDetailsClass.php");

   function getOneOrders($OrderID) {
       $OrderDetails = new OrderDetails($OrderID, null, null, null);
       $result = $OrderDetails->fetchOne();
   
       if (empty($result)) {
           throw new Exception("No Order details found", 404);
           exit;
       }
       return $result;
   };
  

 function addOrderDetails($OrderID, $ProductID, $Quantity, $UnitPrice) {
        $orderDetails = new OrderDetails($OrderID, $ProductID, $Quantity, $UnitPrice);
        $result = $orderDetails->insert();
        
        return $result;

 };
?>