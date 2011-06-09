<?php 

	$result = array();

	if(!isset($_POST['username']) ||  !isset($_POST['email'])){
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
		echo json_encode($result);
		exit;
	}

	require_once('../../init.php');	
	
	$message = <<<MESSAGE
Hi,
	Your account at IIT BHU CSE has been created successfully.
	
	Username : {username}
	Password : {password}
	
	Thank you for using our services.
	
Regards,
Team IIT BHU CSE
MESSAGE;
	
	$op = $cl->load("user.register", ECROOT);
	$model['email'] = $_POST['email'];
	$model['username'] = $_POST['username'];
	$model['subject'] = "[IIT BHU CSE] Account Registration";
	$model['message'] = $message;
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		$result['success'] = true;
		$result['msg'] = array(
			'module' => 'alert',
			'args' => array(
				'title' => "Success", 
				'data' =>'Your account has been created succesfully. The new credentials have been mailed to your email.'));
	}
	else {
		$result['success'] = false;
		$result['msg'] = $model['msg'];
	}

	echo json_encode($result);

?>