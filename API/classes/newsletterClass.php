<?php
include("./../classes/dbClass.php");

class Newsletter {
    public $newsletterID;
    public $userId;
    public $firstName;
    public $lastName;
    public $email;
    public $db;

    function __construct($newsletterID = null, $userId = null, $firstName = null, $lastName = null, $email =null) {
        $this->newsletterID= $newsletterID;
        $this->userId = $userId;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->db = new Database();
    }

    public function fetchAll() {
        $query = "SELECT * FROM newsletters;";
        $result = $this->db->runQuery($query);
        return $result;
    }
    public function insert() {
        $query = "INSERT INTO newsletters (FirstName, LastName, Email) VALUES(:firstname, :lastname, :email);";
        $value = array(":firstname"=>$this->firstName, ":lastname"=>$this->lastName, ":email"=>$this->email);
        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }

        
}

?>