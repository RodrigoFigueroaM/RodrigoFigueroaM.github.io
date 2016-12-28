
 <?php
 header("Access-Control-Allow-Origin: *");
 $name = $_POST['name'];
 $text = $_POST['text'];
 $to      = "ruimonroy.92@gmail.com";
 $subject        = "website";
 $message        = "hello";
 $headers = "From: ruimonroy.92@gmail.com";

mail($to,$subject,$message)
  ?>
