<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'smtp-account-details.php';

$mail = new PHPMailer(true);

$mail->SMTPDebug = 3;                               

$mail->isSMTP();            
                     
$mail->Host = "mail.privateemail.com";

$mail->SMTPAuth = true;                          

$mail->Username = $smtpUsername;     

$mail->Password = $smtpPassword;                           

$mail->SMTPSecure = "ssl";                           

$mail->Port = 465;                                   

$mail->From = "care@drwatsondental.com";

$mail->FromName = "Email from our website";

$mail->addAddress("rodionvh@gmail.com", "Recepient Name");

$mail->isHTML(true);

$mail->Subject = "This email was sent from drwatsondental.com/contact using the contact form";
$mail->Body = 
  "<p>Do not reply to this email as it will not be delivered. Instead, contact the patient using the details they provided below (email or phone).<br><br>
  Name: $name<br><br>
  Email: $email<br><br>
  Phone: $phone<br><br>
  Message: $message</p>";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}

?>