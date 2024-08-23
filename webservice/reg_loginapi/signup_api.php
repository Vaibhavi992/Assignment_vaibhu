<?php
// insert api
header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data_arr = json_decode(file_get_contents("php://input"), true);

$username = $data_arr["name"]; 
$useremail = $data_arr["email"]; 
$userpassword = base64_encode($data_arr["password"]);

require_once "dbconfig.php";

$query = "INSERT INTO userdata (name,email,password) 
                       VALUES ('".$username."', '".$useremail."', '".$userpassword."')";

if(mysqli_query($conn, $query) or die("Insert Query Failed"))
{
	echo json_encode(array("message" => "Registration Successfully", "status" => true));	
}
else
{
	echo json_encode(array("message" => "Failed To Registration ", "status" => false));	
}

?>