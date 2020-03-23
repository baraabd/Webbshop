<?php


include("./../classes/newsletterClass.php");

function getNewsletter() {
    $Newsletter = new Newsletter();
    $result = $Newsletter->fetchAll();
    return $result;
};

function subscribeNews($firstname, $lastname, $email)
{
    $newsletter = new Newsletter(null,null, $firstname, $lastname, $email);
    $result = $newsletter->insert();
    return "done";
    
    if (empty($result)) {
        throw new Exception("No subscribtion found", 404);
        exit;
    }
    
    return $result;
};





?>