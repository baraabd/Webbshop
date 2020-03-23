<?php
include("./../handlers/categoryDetailsHandler.php");
try {

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        error_log("POST");
        if ($_POST["entity"] == "enjoy") {
            error_log("entity");
            if ($_POST["endpoint"] == "addCategoryDetails") {
                error_log("endpoint");
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
