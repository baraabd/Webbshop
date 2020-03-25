<?php

include("./../classes/userClass.php");

function signUpSubmit($firstName, $lastName, $email, $password, $role, $active )
{
    $user = new User(null, $firstName, $lastName, $email, $password, $role, $active);
    $result = $user->insert();
    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }    
    return $result;   

    /* if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }
    
    return "no data was sent"; */
};


function getUsers()
{
    $user = new User();
    return $user->fetchAll();
    
};

function loginUser($email, $password) {
    $user = new User();
    $allUsers = $user->fetchAll();
    for ($i=0; $i <= count($allUsers); $i++) {
        if ($email === $allUsers[$i]["Email"]) {
            if (password_verify($password, $allUsers[$i]["Password"])) {
                $_SESSION["inloggedUser"] = $allUsers[$i]["FirstName"];
                $_SESSION["inloggedUserID"] = $allUsers[$i]["UserID"];
                return array("success" => true, "userName" => "welcome ".$allUsers[$i]["FirstName"], "inloggedUserId" => $allUsers[$i]["UserID"]);
            }
        }
    };

    return "Wrong Username or passwords";
}
function loginAdmin($email, $password) {
    $User = new User(null, null, null, $email, $password, null, null);
    $result = $User->getAdminLogin();
    if (empty($result)) {
        throw new Exception("No user found", 404);
        exit;
    }
    return $result;
};



function getCountUsersWantAdmin()
{
    $User = new User();
    $result = $User->countUsersWantAdmin();    
    if (empty($result)) {
        throw new Exception("No User found", 404);
        exit;
    }    
    return $result;
};

function activeUserAdmin($userId, $firstName, $lastName, $email, $password, $role, $active) {   
    $User = new User($userId, $firstName, $lastName, $email, $password, $role, $active);
    
    $result = $User->update();  

    if (empty($result)) {
        throw new Exception("No User found", 404);
        exit;
    }
    
    return $result;
};

function getAllUsersWantAdmin()
{
    $User = new User();
    $result = $User->getAllUsersWantAdmin();    
    if (empty($result)) {
        throw new Exception("No User found", 404);
        exit;
    }    
    return $result;
};

?>