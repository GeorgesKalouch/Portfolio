<?php

$servername = "localhost";
$username = "id22199382_georgeskal"; 
$password = "K@l0uchdude";
$dbname = "id22199382_portfolio";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>