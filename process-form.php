<?php

	define("DB_HOST", "localhost");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");
    define("DB_DATABASE", "website_nao");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $conn = new mysqli("localhost", "root", "", "website_nao");
    if ($conn->connect_error) {
        echo "Connection failed: " . $conn->connect_error; // Display the connection error
    } else {
        $sql = "INSERT INTO contact_submissions (full_name, email, phone_number, subject, message) VALUES ('$fullName', '$email', '$phoneNumber', '$subject', '$message')";
        if ($conn->query($sql) === TRUE) {
            $to = "nao.kinoshita@bwdbern.ch";
            $subject = "New Contact Form Submission";
            $emailMessage = "A new contact form submission:\n\nFull Name: $fullName\nEmail: $email\nPhone Number: $phoneNumber\nSubject: $subject\nMessage: $message";
            mail($to, $subject, $emailMessage);
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error; // Display the SQL error
        }
        $conn->close();
    }
}
?>
