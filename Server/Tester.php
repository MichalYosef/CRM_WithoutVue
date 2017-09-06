<?php
require_once 'crmBLL.php';


$BLLObj = new crmBLL("crm_project");

/*
$leadObj = (object) array("lead_name" => "eli", 
                          "lead_phone" => "0202020454",
                          "product_id" => "2");
$res = $BLLObj->insert("leads", $leadObj);
                                  
echo $res;

*/


$res = $BLLObj->getAll("leads");
                                  
echo $res;



?>