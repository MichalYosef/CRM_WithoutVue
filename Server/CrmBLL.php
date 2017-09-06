<?php

require_once 'Connection.php';

class CrmBLL{

    private $dbName;
    private $dbHandler;
    

    public function __construct( $dbName, $dbHandler = null )
    {
        $this->$dbName = $dbName;
        
        if( $dbHandler )
        {
            $this->$dbHandler = $dbHandler;
        }
        else
        {
            // TODO: get from DI Injector 
            $this->dbHandler = new Connection( $dbName );
        }
        
        
    }

    public function getAll( $tblName ) 
    {
        try
        {
            $statement = $this->dbHandler->runQuery( "SELECT * FROM " . $tblName );
            if(  $statement )
            {                
                $statement->fetchAll();
            }
        }
        catch(PDOException  $e )
        {
            notify::Error( $e->getMessage() );

        }
        
    }

    public function insert( $tblName, $obj) 
    {
        $keyStr = "(";
        $valueStr = " VALUES(";
        
        foreach( $obj as $key => $value ) 
        {
            $keyStr .= $key . ", ";
            $valueStr .= "'" . $value . "',";    
        }

        $keyStr = rtrim($keyStr,", ") . ")" ;
        $valueStr = rtrim( $valueStr, ", ") . ")" ;
        

        $sqlQuery = "INSERT INTO " . $tblName . $keyStr . $valueStr .";";

        return $this->dbHandler->runQuery( $sqlQuery );
    }
/*
    private function createObjArray( $statement, $tblName )
    {
        try{
            
            // class name = table name minus s (lead leads)
            $className = substr ( $tblName  , 0, strlen($tblName)-1 );
            
            // array of objects that will be created from statement
            $objArr=[];
            

            if( $statement->rowCount() > 0 ) 
            {
                $result = $statement->fetchAll();
                return $result;
                
                }
                Notify::log("empty table");
                return NULL;
            
            }
        }
        catch( PDOException  $e  )
        {
            notify::Error( $e->getMessage() );
        }
    }
         
*/
}
?>