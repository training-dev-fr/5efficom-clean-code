<?php
class User 
{  
    private $firstName; 
    private $lastName; 
    private static $regex;

    public function __construct()
    {
        self::$regex = "/[a-zA-Zéèêîûô]{2,50}/U";
    }

    public function authenticate($email, $password) 
    {   
        if($email !== "avaast" || $password !== "123456")
        {
            return false;
        }
        return true;
    }

    public function updateUser($db)
    {
        $db->save($this);
    }
    
    public function setFirstName($newFirstName)
    {
        return $this->firstName = $newFirstName;
    } 

    public function getFullName()
    {
        return "$this->firstName $this->lastName";
    } 
    
    private function checkNameFormat($name)
    { 
        return preg_match(self::$regex, $this->{$name}); 
    }
    
}