<?php
session_start();
include("./../handlers/userHandler.php");
try {
    if ($_SERVER["REQUEST_METHOD"] =='GET') {
        if (!isset($_SESSION['inloggedUser'])) {
            $result = "Access denied";
            echo json_encode($result);
        } else if (isset($_SESSION['inloggedUser'])) {
                echo json_encode("Welcome"." ".$_SESSION["inloggedUser"]." "."from Session");
            } 
    }
    else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["entity"] == "enjoy") {            
            if ($_POST["endpoint"] == "addUser") {
                //$hash = password_hash($_POST['password'], PASSWORD_DEFAULT);                
                $result = signUpSubmit(
                    $_POST['firstname'],
                    $_POST['lastname'],
                    $_POST['email'],
                    $_POST['password'],                   
                    $_POST['role'],
                    $_POST['active']                                
                );
                echo json_encode($result);
            } else if($_POST["endpoint"] == "loginUser") {
                $result = loginUser(
                $_POST['userName'],
                $_POST['password']);
                echo json_encode($result);

            } else if($_POST["endpoint"] == "loginAdmin") {
                $result = loginAdmin(
                $_POST['userName'],
                $_POST['password']);
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "getCountUsersWantAdmin") {
                $result = getCountUsersWantAdmin();
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "getAllUsersWantAdmin") {
                $result = getAllUsersWantAdmin();
                echo json_encode($result);

            } else if ($_POST["endpoint"] == "updateActiveAdmin") {                 
                $result = activeUserAdmin(
                $_POST['UserID'],
                $_POST['FirstName'],
                $_POST['LastName'],
                $_POST['Email'],
                $_POST['Password'],
                $_POST['Role'],
                $_POST['Active']
                );
                echo json_encode($result);  

            }else {
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