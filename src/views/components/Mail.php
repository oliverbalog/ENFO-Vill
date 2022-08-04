<?php     

$phone = $_POST['phone'];
$email = $_POST['email'];
$name = $_POST['name'];

$to_email = 'info@enfo-vill.hu';
$subject = 'Ajánlatkérés';
$message = $_POST['message'];
$headers = 'Küldte: '+ $name+', Email: '+$email+', Telefon: '+$phone;
mail($to_email,$subject,$message,$headers);

echo("TESZT a php működik!");

console_log("teszt php");

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
?>
