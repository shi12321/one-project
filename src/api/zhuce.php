<?php
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';


	// md5加密
	$password = md5($password);


	$arr="select * from user where username='$username'"; 


	$arrs = $conn->query($arr);

	
	if($arrs->num_rows > 0){
		echo "nol";
	}else{
		$sql = "insert into user(username,password) values('$username','$password')";

		$res = $conn->query($sql);

		if($res){
			echo "1";
		}else{
			echo "Error: " . $sql . "<br/>" . $conn->error;
		}
	}
	$conn->close();
?>

