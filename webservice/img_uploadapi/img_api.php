<?php
// Insert API
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Connect to the database
require_once "dbconfig.php";

// Check if an image file is being uploaded
if(isset($_FILES['image'])) {
    $file = $_FILES['image'];

    // Define the upload directory and file path
    $uploadDir = 'uploads/';
    $fileName = basename($file['name']);
    $filePath = $uploadDir . $fileName;


    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Move the uploaded file to the server's upload directory
    if(move_uploaded_file($file['tmp_name'], $filePath)) {
        // Prepare the SQL query
        $query = "INSERT INTO userimg (image) VALUES ('$fileName')";

        // Execute the query and check for success
        if(mysqli_query($conn, $query)) {
            echo json_encode(array("message" => "Image Uploaded and Record Inserted Successfully", "status" => true, "image_path" => $filePath));	
        } else {
            echo json_encode(array("message" => "Database Insert Failed", "status" => false));	
        }
    } else {
        echo json_encode(array("message" => "File Upload Failed", "status" => false));	
    }
} else {
    echo json_encode(array("message" => "No File Uploaded", "status" => false));	
}
?>
