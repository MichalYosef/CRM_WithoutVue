<?php

class Prospect extends baseCrmPerson
{
    private $lead_id;

    public function __construct($lead_id
                                $name, 
                                $phone,
                                $BLL,
                                $id=0 // in case we get it from DB)
    {
        parent::__construct("leads", $name, $phone, $BLL,$id );
        $this->lead_id = $lead_id;
        
    }

}


?>