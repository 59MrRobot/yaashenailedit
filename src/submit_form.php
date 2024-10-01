<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = $_POST['first_name'];
    $surname = $_POST['surname'];
    $number = $_POST['number'];
    $datetime = $_POST['datetime'];
    $message = $_POST['message'];

    print_r($_Post);

    // Handle file upload
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["image"]["name"]);
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Check if file is an actual image
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check === false) {
        die("File is not an image.");
    }

    // Move uploaded file to target directory
    if (!move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        die("Sorry, there was an error uploading your file.");
    }

    // Email settings
    $to = "kuneneswazi18@gmail.com";
    $subject = "Nail Booking";
    $body = "
        First Name: $firstName\n
        Surname: $surname\n
        Number: $number\n
        Date and Time: $datetime\n
        Message: $message\n
    ";
    $headers = "From: kuneneswazi18@gmail.com";

    // Read the image file into a string
    $image = file_get_contents($targetFile);
    $imageData = base64_encode($image);

    // Add the image as an attachment
    $separator = md5(time());
    $eol = "\r\n";

    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    // Message body
    $body .= "--" . $separator . $eol;
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
    $body .= "Content-Transfer-Encoding: 8bit" . $eol;
    $body .= $message . $eol;

    // Attachment
    $body .= "--" . $separator . $eol;
    $body .= "Content-Type: image/" . $imageFileType . "; name=\"" . basename($targetFile) . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $imageData . $eol;
    $body .= "--" . $separator . "--";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Form submitted successfully.";
    } else {
        echo "There was an error sending the email.";
    }
}
?>