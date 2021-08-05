<?php 
	if(isset($_GET['uid'])){
		include 'db.php';
		$uid = $_GET['uid'];

		$fetch_url = "SELECT * FROM shorturl WHERE uid = '".$_GET['uid']."'";
		$result = mysqli_query($conn,$fetch_url);
		if(mysqli_num_rows($result)>0){

			$row = mysqli_fetch_assoc($result);

			header("Location: ".$row['original_url']);

		}else{
			echo "<h2>URL not Found</h2>";
		}
	}
	else{
		header("Location: ./");
	}

?>