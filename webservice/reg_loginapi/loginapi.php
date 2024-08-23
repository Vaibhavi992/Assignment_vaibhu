<?php
// login api
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "dbconfig.php";


$data_arr = json_decode(file_get_contents("php://input"), true);

if (isset($data_arr["email"]) && isset($data_arr["password"])) {

    $useremail = mysqli_real_escape_string($conn, $data_arr["email"]); 
    $userpassword = base64_encode($data_arr["password"]);

    $query = "SELECT * FROM userdata WHERE email = '$useremail' AND password = '$userpassword'";

    $result = mysqli_query($conn, $query);

    // Check if the query returned any results
    if (mysqli_num_rows($result) > 0) {
        echo json_encode(array("message" => "Login Successful", "status" => true));
    } else {
        echo json_encode(array("message" => "Invalid Email or Password", "status" => false));
    }
} else {
    echo json_encode(array("message" => "Required fields are missing", "status" => false));
}
?>
