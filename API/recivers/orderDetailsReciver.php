<?php

session_start();

require_once("../handlers/orderDetailsHandler.php");
try {
       
    if($_SERVER['REQUEST_METHOD'] === 'POST') {          
        if ($_POST["entity"] == "enjoy") {            
            if ($_POST["endpoint"] == "getOrderDetails") {                
                $result = getOneOrders(
                $_POST['OrderID']                            
                );
                echo json_encode($result);
            }
        }
   
    } else {
        throw new Exception("Not valid request method", 405);
    }
} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}

?>