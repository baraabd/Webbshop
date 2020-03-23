<?php

session_start();

require_once("./../handlers/orderHandler.php");
try {

    if ($_SERVER["REQUEST_METHOD"] =='GET') {        
        $result = getAllOrders();
        echo json_encode($result);       
        
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if ($_POST["entity"] == "enjoy") {            
                if ($_POST["endpoint"] == "addOrder") {
                    if (isset($_SESSION["inloggedUser"])) {
                    $result = addorder(
                        $_SESSION["inloggedUserID"],
                        $_POST['orderDate'],
                        $_POST['ShipperID'],
                        $_POST['orderProducts'],
                    );
                    echo json_encode($result);

                    } else {
                        echo json_encode("Need to login to do this");
                    }
                
                } else if($_POST["endpoint"] == "getOrdersToMyPages") {
                    $result = getOrdersToMyPages($_POST["inloggedUserId"]);
                    echo json_encode($result);
                    
                } else if ($_POST["endpoint"] == "theOrderIsReceived") {
                    $result = setThisAsReceived(
                        $_POST['theReceivedOrderId']);
                    echo json_encode($result);
                
                } else if ($_POST["endpoint"] == "getAllorderShiped") {
                    $result = getAllOrderShiped();
                    echo json_encode($result);

                } else if ($_POST["endpoint"] == "getAllorderBinding") {
                    $result = getAllorderBinding();
                    echo json_encode($result);

                } else if ($_POST["endpoint"] == "updateAdminOrder") {                 
                    $result = updateOrder(
                    $_POST['OrderID'],
                    $_POST['OrderDate'],
                    $_POST['UserID'],
                    $_POST['ShipperID'],
                    $_POST['Recieved'],
                    $_POST['Shipped']                                    
                    );                
                    echo json_encode($result);                 
                
                } else {
                    throw new Exception("Not a valid endpoint", 501);
                }

            } else {
                throw new Exception("Not a valid entity method", 501);
            }

    } else {
        throw new Exception("Not valid request method", 405);
    }

} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}

?>