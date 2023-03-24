<?php
   $for_valid = $_COOKIE['test'];
   if($for_valid == true){
        $subject = "sending email test";
        $message = 'hi there my name is rayantech</h1>';
        $detinator = "tevezlife@gmail.com";
        $header = "From:\Rayantech\"<braintechbrotech@gmail.com>\n";
        $header .= "Reply-To:braintechbrotech@gmail.com";
        $header .= "Content-Type:text/html; charset =\"iso-8859-1\"";

        if(mail($detinator, $subject, $message, $header)){
            echo "Email sent!";
        }else{
            echo "error sending your email!!!";
        }
   }
    
?>