

<?php
;

function RandomString()
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < 10; $i++) {
        $randstring = $randstring . $characters[rand(0, strlen($characters)-1)];
    }
    
    return $randstring;
}

$randstring = RandomString();
echo $randstring;

?>