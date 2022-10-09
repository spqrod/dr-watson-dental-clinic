<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer-master/src/Exception.php';
require '/PHPMailer-master/src/PHPMailer.php';
require '/PHPMailer-master/src/SMTP.php';

$to = "rodionvh@gmail.com";
$nameto = "nameto";
$subject = "subject";
$message = "message";

function sendmail($to,$nameto,$subject,$message,$altmess)  {
    $from  = "care@drwatsondetal.com"; 
    $namefrom = "Your Name";
    $mail = new PHPMailer();
    $mail->SMTPDebug = 0;
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    $mail->Host   = "mail.privateemail.com";
    $mail->Port       = 465;
    $mail->Username   = $from;
    $mail->Password   = "Radha108!";
    $mail->SMTPSecure = "ssl";
    $mail->setFrom($from,$namefrom);
    $mail->addCC($from,$namefrom);
    $mail->Subject  = $subject;
    $mail->isHTML();
    $mail->Body = $message;
    $mail->AltBody  = $altmess;
    $mail->addAddress($to, $nameto);
    return $mail->send();
  }

?>