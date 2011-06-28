<?php 

	$result = array();

	if(!isset($_POST['username']) ||  !isset($_POST['email'])){
		$result['success'] = false;
		$result['msg'] = '<p class="error">Invalid Request</p>';
		echo json_encode($result);
		exit;
	}

	require_once('../../init.php');
	
	$message = <<<MESSAGE
Hi,
	Your account at IIT BHU CSE has been resetted successfully.
	
	Username : {username}
	New password : {password}
	
	Thank you for using our services.
	
Regards,
Team IIT BHU CSE
MESSAGE;
	
	$op = $cl->load("user.reset", ECROOT);
	$model['email'] = $_POST['email'];
	$model['username'] = $_POST['username'];
	$model['subject'] = "[Swarmlead] Account Reset";
	$model['message'] = $message;
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		$result['success'] = true;
		$result['msg'] = '<p class="success">Your account has been resetted succesfully. The new credentials have been mailed to your email.</p>';
	}
	else {
		$result['success'] = false;
		$result['msg'] = '<p class="error">Invalid credentials</p>';
	}

	echo json_encode($result);

?>