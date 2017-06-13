<?php
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';

	$password = isset($_GET['password']) ? $_GET['password'] : '';

	$password = md5($password);

	$sql = "select username from user where username = '$username' and password='$password'";

	$arrs = $conn->query($sql);

	if($arrs->num_rows > 0){
		echo "1";
	}else{
		echo "0";
	}
	$conn->close();
?>