<?php
include(realpath(dirname(__FILE__)."/dbClass.php"));

class CategoryDetails {
    public $CategoryID;
    public $ProductID;
    public $db;

    function __construct($CategoryID = null, $ProductID = null) {
        $this->CategoryID= $CategoryID;
        $this->ProductID = $ProductID;
        $this->db = new Database();
    }
       
    public function insert() {
        $query = "INSERT INTO category_details (CategoryID, ProductID) VALUES(:CategoryID, :ProductID);";
        $value = array(":CategoryID"=>$this->CategoryID, ":ProductID"=>$this->ProductID);
        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    
          
}

?>
