<?php
$to = "tevezlife@gmail.com";
$subject = "thank you for your purchase";

$headers = array(
    "MINe-Version" => "1.0",
    "Content-Type" => "text/html;charset=UTF-8",
    "From" => "braintechbrotech@gmail.com",
    "Reply-To" => "braintechbrotech@gmail.com"
);

$message = file_get_contents("contact_email_template.php");

$send = mail($to, $subject, $message, $headers);

echo ($send ? "Mail is send" : "There was an error");
