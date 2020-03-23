<?php
require_once("../classes/dbClass.php");


class OrderDetails {
    public $OrderID;
    public $ProductID;
    public $Quantity;
    public $UnitPrice;
    public $db;
    
    function __construct($OrderID = null, $ProductID = null, $Quantity = null, $UnitPrice = null) {
        $this->OrderID = $OrderID;
        $this->ProductID = $ProductID;
        $this->Quantity = $Quantity;
        $this->UnitPrice = $UnitPrice;
        $this->db = new Database();
    }

    
    public function fetchOne() {         
        $query = "SELECT * FROM order_details  WHERE OrderID = :OrderID;";
        $value = array(":OrderID"=>$this->OrderID);        
        $result =$this->db->runQuery($query, $value);                   
        return $result;

    }

    public function getOneOrderDetails() {   
        error_log("class function IN");       
        $query = "SELECT * FROM order_details  WHERE OrderID = :OrderID;";
        error_log($query); 
        $value = array(":OrderID"=>$this->OrderID);  
        error_log("Value Efter");       
        $result =$this->db->runQuery($query, $value);    
        error_log("result Efter");                
        return $result;

    }

    public function insert() {
        $query = "INSERT INTO order_details (OrderID, ProductID, Quantity, UnitPrice)
        VALUES(:OrderID, :ProductID, :Quantity, :UnitPrice);";
        
        $value = array(":OrderID"=>$this->OrderID, ":ProductID"=>$this->ProductID, ":Quantity"=>$this->Quantity,
        ":UnitPrice"=>$this->UnitPrice);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function update() {         
        $query = "UPDATE order_details SET OrderID = :OrderID, ProductID = :ProductID, Quantity = :Quantity, UnitPrice = :UnitPrice
        WHERE OrderID = :OrderID;";

        $value = array(":ProductID"=>$this->ProductID, ":Quantity"=>$this->Quantity, ":UnitPrice"=>$this->UnitPrice,
        ":orderID"=>$this->orderID);

        $result =$this->db->runQuery($query, $value);
        return $result;
    }
    public function delete() {
        $query = "DELETE FROM order_details WHERE OrderID = :OrderID;";
        $value = array(":OrderID"=>$this->OrderID);
        $result =$this->db->runQuery($query);
        return $result;
    }
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }
}

?>