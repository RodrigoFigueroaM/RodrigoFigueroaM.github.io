
 <?php
 header("Access-Control-Allow-Origin: *");
 $name = $_POST['name'];
 $text = $_POST['text'];
 $to_email       = "ruimonroy.92@gmail.com";
 $subject        = "website";
 $message        = "hello";
 $headers = "From: ruimonroy.92@gmail.com";

 if (mail($to,$subject,$message,$headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
  ?>
