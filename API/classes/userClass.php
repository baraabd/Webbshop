<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

  class User {
    public $userId;
    public $firstName;
    public $lastName;
    public $email;
    public $password;
    public $role;
    public $active;
    public $db;
   

    function __construct($userId = null, $firstName = null, $lastName = null, $email = null, $password = null, $role = null, $active = null) {
        $this->userId= $userId;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->password = $password;
        $this->role = $role;
        $this->active = $active;
        $this->db = new Database();
    }   
    
    
    public function fetchAll() {
        $query = "SELECT * FROM Users;";
        $result = $this->db->runQuery($query);
        return $result;
    }

    public function countUsersWantAdmin() {
        $query = "SELECT count(*) AS count FROM users WHERE Role LIKE 'Admin' AND Active is NULL ;";
        return $this->db->runQuery($query);
    }
    

    public function getAllUsersWantAdmin() {
        $query = "SELECT * FROM users WHERE Role LIKE 'Admin' AND Active is NULL;";
        return $this->db->runQuery($query);
    }

    public function insert() {
        $query = "INSERT INTO users (FirstName, LastName, Email, Password, Role, Active)
        VALUES(:firstname, :lastname, :email, :password, :role, :active);";

        $value = array(":firstname"=>$this->firstName, ":lastname"=>$this->lastName, ":email"=>$this->email, 
        ":password"=>$this->password, ":role"=>$this->role, ":active"=>$this->active);

        $result =$this->db->runQuery($query, $value);
        return $result;        
    }
    
    
    
    public function update() {        
        $query = "UPDATE users SET FirstName = :firstName, LastName = :lastName, Email = :email,
        Password = :password, Role = :role, Active = :active 
        WHERE UserID = :userId;";

        $value = array(":firstName"=>$this->firstName, ":lastName"=>$this->lastName, ":email"=>$this->email, 
        ":password"=>$this->password, ":role"=>$this->role, ":userId"=>$this->userId, ":active"=>$this->active);

        $result =$this->db->runQuery($query, $value);
        return $result;        
    }

    
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }

}

?>