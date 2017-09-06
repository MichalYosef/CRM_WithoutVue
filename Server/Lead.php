<?php

class Lead extends baseCrmPerson
{
    private $product_id;

    public function __construct($lead_name, 
                                $lead_phone,
                                $product_id,
                                $BLL,
                                $id=0 // in case we get it from DB)
    {
        parent::__construct( "leads", $lead_name, $lead_phone, $BLL, $id );

        $this->product_id = $product_id;

    }

    public function validate()
    {
        
    }

}


?>