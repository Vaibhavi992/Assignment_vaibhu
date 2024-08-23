<?php

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"), true);

$userid = $data["id"];
$username =$data["name"];
$useremail =$data["email"];
$userpassword =$data["password"];

require_once "dbconfig.php";

$query = "UPDATE userdata SET name= '".$username."' , password= '".$userpassword."' ,email='".$useremail."'
                           WHERE id='".$userid."' ";

if(mysqli_query($conn, $query) or die("Update Query Failed"))
{	
	echo json_encode(array("message" => "Data Update Successfully", "status" => true));	
}
else
{	
	echo json_encode(array("message" => "Data Not Updated", "status" => false));	
}

?>