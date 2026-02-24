<?php
$attempt = isset($_POST['attempt']) ? $_POST['attempt'] : '';
$ip = $_SERVER['REMOTE_ADDR'];
$timestamp = date('Y-m-d H:i:s');

$log_entry = "$timestamp | IP: $ip | Attempt: $attempt\n";
file_put_contents('gate_log.txt', $log_entry, FILE_APPEND);
?>
