<?php

include("./../classes/categoryDetailsClass.php");


function insertCategoryDetails($CategoryID, $ProductID)
{
    $CategoryDetails = new CategoryDetails($CategoryID, $ProductID);
    $result = $CategoryDetails->insert();

    if (empty($result)) {
        throw new Exception("No CategoryDetails found", 404);
        exit;
    }    
    return $result;
};


?>