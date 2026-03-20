<?php
    class User{
        public $firstname;
        public $lastname;
        public $email;
        private $password;

        public function setPassword($password){
            if(strlen($password) <6){
                throw new Exception("Le mot de passe doit contenir au moins 6 caractères");
            }
            return $this->password = $password;
        }
    }