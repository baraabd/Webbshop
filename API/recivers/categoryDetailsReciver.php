<?php
include("./../handlers/categoryDetailsHandler.php");
try {

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {      
        if ($_POST["entity"] == "enjoy") {           
            if ($_POST["endpoint"] == "addCategoryDetails") {              
                $result = insertCategoryDetails(
                    $_POST['CategoryID'],
                    $_POST['ProductID']
                );
                echo json_encode($result);
            }
        }
    }
    
} catch (Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}
