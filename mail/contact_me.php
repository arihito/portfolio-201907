<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "全てのフォームに値を入力してください!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'arihito.m@gmail.com';
$email_subject = "お問い合わせありがとうございます:  $name";
$email_body = "改めてこちらからご連絡いたします。\n\n"."以下はあなたの送信いただいた詳細です:\n\nお名前: $name\n\nメール: $email_address\n\n電話番号: $phone\n\nお問い合わせ:\n$message";
$headers = "From: arihito.m@gmail.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
