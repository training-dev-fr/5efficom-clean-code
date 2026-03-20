
<?php
    class AdaptaterMap implements IMap{
        private $externalMap;

        public function __construct(ExternalMap $externalMap){
    $this->externalMap = $externalMap;
        }
        public function getPosition($lat, $lon)
        {
            $location = new stdClass();
            $location->lat = $lat;
            $location->long = $lon;
            $this->externalMap->getLocation($location);
        }

        public function searchByCity($city)
        {
            throw new \Exception('Not implemented');
        }
    }