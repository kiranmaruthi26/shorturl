<?php 

	include "db.php";

	function validate($data){
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	$original_url = mysqli_real_escape_string($conn,validate($_POST['original_url']));
	$uid = $_POST['uid'];

	$store_url = "INSERT INTO shorturl(uid,original_url,`datetime`) VALUES('$uid','$original_url',NOW())";

	if(mysqli_query($conn,$store_url)){
		echo "<div class='border m-5 rounded-3 shadow p-3'>
		<h3>Shortened URL</h3>
        <input type='URL' name='short_url' class='form-control' id='final_url' value = 'http://shorturl.getcleared.in/redirect?uid=$uid'>
        <button class='btn btn-outline-info form-control mt-2' onclick='copyUrl()' id='copy_url'>Copy to Clipboard</button>
        <a class='btn btn-outline-primary form-control mt-2' href='http://shorturl.getcleared.in/redirect?uid=$uid' target='_blank'>Open Link</a>
        </div>";
	}else{
		echo "faild";
	}


?>