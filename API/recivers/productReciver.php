<?php

session_start();

include("../handlers/productHandler.php");
try {

    if ($_SERVER["REQUEST_METHOD"] == 'GET') {
        $result = getProducts();
        echo json_encode($result);
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if ($_POST["entity"] == "enjoy") {
            if ($_POST["endpoint"] == "getXboxProducts") {
                $result = getXboxProducts();
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "getPS4Products") {
                $result = getPS4Products();
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "getPCProducts") {
                $result = getPCProducts();
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "addAdminProduct") {
                $result = insertToProduct(
                    $_POST['CategoryID'],
                    $_POST['ProductName'],
                    $_POST['UnitInStock'],
                    $_POST['Price'],
                    $_POST['CoverPicture'],
                    $_POST['PNGPicture'],
                    $_POST['Description']
                );
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "delAdminProduct") {
                $result = deleteFromProduct(
                    $_POST['productID']
                );
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "getAllProducts") {
                $result = getProducts();
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "getIdProduct") {
                error_log("endpointGetIdProduct");
                $result = getIdProduct(
                    $_POST['ProductName']
                );
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "getAllProductLess") {
                $result = getAllProductLess();
                echo json_encode($result);
            } else if ($_POST["endpoint"] == "updateAdminProduct") {
                error_log("updatebeforeProduct");
                $result = updateProduct(
                    $_POST['ProductID'],
                    $_POST['CategoryID'],
                    $_POST['ProductName'],
                    $_POST['UnitInStock'],
                    $_POST['Price'],
                    $_POST['CoverPicture'],
                    $_POST['PNGPicture'],
                    $_POST['Description']
                );
                error_log("updateEfterProduct");
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
