<?php

include("./../classes/categoryClass.php");

function getAllCategories() {
    $category = new Category();
    $result = $category->fetchAll();
    return $result;
};

function getIdCategory($CategoryName)
{
    $category = new Category(null, $CategoryName);
    $result = $category->fetchOne();
    error_log("fetchOne");
    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }    
    return $result;
};

function insertToCategory($categoryName)
{
    $category = new Category(null, $categoryName);
    $result = $category->insert();

    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }    
    return $result;
};

function updateCategory($CategoryID,$CategoryName)
{
    $category = new Category($CategoryID, $CategoryName);
    $result = $category->update();

    if (empty($result)) {
        throw new Exception("No Category Handlar found", 404);
        exit;
    }    
    return $result;
};

function deleteFromCategory($categoryId) {
    $category = new Category($categoryId, null);
    $result = $category->delete();

    if (empty($result)) {
        throw new Exception("No Category found", 404);
        exit;
    }
    return $result;
};




?>