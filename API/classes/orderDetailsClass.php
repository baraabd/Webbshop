<?php
require_once("./../classes/dbClass.php");


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

    
    public function fetchAll() {
        $query = "SELECT * FROM order_details;";
        $result = $this->db->runQuery($query);
        return $result;
    }

    public function fetchOne() {         
        $query = "SELECT * FROM order_details  WHERE OrderID = :OrderID;";
        $value = array(":OrderID"=>$this->OrderID);        
        $result =$this->db->runQuery($query, $value);                   
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
    
    public function flexFunction($flexQuery, $flexArray = null) {
        return $this->db->runQuery($flexQuery, $flexArray);
    }
}

?>