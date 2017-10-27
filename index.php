<?php

/*
LUFA FAMRS INC. 2017
Snap Inventory Application.
*/

// Backend Support -_-

if (!empty($_POST)) {
    $rawData = $_POST['imgBase64'];
    $filteredData = explode(',', $rawData);
    $unencoded = base64_decode($filteredData[1]);
    $randomName = rand(0, 99999);;
    //Create the image 
    $fp = fopen($randomName.'.png', 'w');
    fwrite($fp, $unencoded);
    fclose($fp);
}

// Including the views
include_once('index.html');



// end
