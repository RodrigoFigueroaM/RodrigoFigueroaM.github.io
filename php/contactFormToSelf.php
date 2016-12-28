
 <?php
 header("Access-Control-Allow-Origin: *");
 $name = $_POST['name'];
 $text = $_POST['text'];
 $to      = "xxxxxx@gmail.com";
 $subject        = "website";
 $message        = "hello";
 $headers = "From: xxxxx@gmail.com";

mail($to,$subject,$message)
 ?>
