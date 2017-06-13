<?php
	include 'connect.php';


	
	// SQL语句
	$sql = "select * from shang ";

	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);
	echo json_encode($rows,JSON_UNESCAPED_UNICODE);
	
	// 关闭连接
	$conn->close();
?>
