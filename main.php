<?php

if (isset($_POST["message"]) && isset($_POST["username"])){
    $file = fopen("db.txt", "a");
    fwrite($file, $_POST["username"] . ": " . $_POST["message"] . "\n");
    fclose($file);
}