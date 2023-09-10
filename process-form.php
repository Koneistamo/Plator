<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspeacialchars$_POST["name"];
    $email = filter_var$_POST["email"];
    $phone = htlmlspecialchars$_POST["phone"];
    $message = htmlspecialchars$_POST["message"];

    $to = "kalle@plator.tech"; // Replace with your email address
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
}
?>
