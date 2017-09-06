<?php

abstract class BaseCrmPerson
{

    private $id;
    private $name;
    private $phone;
    private $tblName;
    private $BLL;

  
    abstract public function getSelfDataObj(); 

    abstract public function validate(); // returns bool
    


    public function __construct($tblName, 
                                $name, 
                                $phone,
                                $BLL,
                                $id=-1 /* -1 if comes from client side, 
                                         or real value if comes from DB*/
                                )
    {
        $this-> $id = $id;
        $this-> $name = $name;
        $this-> $phone = $phone;
        $this-> $tblName = $tblName;
        $this-> $BLL = $BLL;
    }

    static function getAll() 
    {
        try
        {
            return  $BLL->getAll( $this-> $tblName );
        }
        catch( $e )
        {
            notify::Error( $e->getMessage() );

        }    
    }

    
    static function create() 
    {
        try
        {
            return  $BLL->insert( $this-> $tblName );
        }
        catch( $e )
        {
            notify::Error( $e->getMessage() );

        }    
    }

    

    public function update()
    {

    }

    public function select()
    {

    }

    public function delete()
    {

    }




}




?>