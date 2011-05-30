<?php 

	$result = array();

	if(!isset($_POST['username']) ||  !isset($_POST['email'])){
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
		echo json_encode($result);
		exit;
	}

	require_once('../init.php');	
	
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
		$result['msg'] = array(
			'module' => 'alert',
			'args' => array(
				'title' => "Success", 
				'data' =>'Your account has been resetted succesfully. The new credentials have been mailed to your email.'));
	}
	else {
		$result['success'] = false;
		$result['msg'] = "Invalid credentials";
	}

	echo json_encode($result);

?>