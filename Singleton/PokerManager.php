<?php
    class PokerManager
    {
        private static $instance;

        private function __construct()
        {

        }

        public function getInstance()
        {
            if(!self::$instance)
            {
                self::$instance = array();
                $table = new stdClass();
                $table->playerList = array();
                $table->playerList[] = new PokerManager();
            } 
            else if(count(self::$instance[count(self::$instance)-1]->listPlayer) <6)
            {
                self::$instance[count(self::$instance)-1]->listPlayer[] = new PokerManager();
            }
            else
            {
                $table = new stdClass();
                $table->playerList = array();
                $table->playerList[] = new PokerManager();
                self::$instance[] = $table;
            }
            return self::$instance;
        }
    }