<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	if(!isset($_POST['stusername']) ||  !isset($_POST['stname']) ||  !isset($_POST['strollno']) ||  !isset($_POST['stemail']) ||  !isset($_POST['stcourse']) ||  !isset($_POST['styear']) ||  !isset($_POST['ststatus'])){
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
		echo json_encode($result);
		exit;
	}
	
	/**
	 * Check for valid user 
	**/
	require_once('../../init.php');	
	if(!$model['valid'] || !isset($model['uid'])){
		$result['success'] = false;
		$result['msg'] = "Session Expired. Please Login";
		echo json_encode($result);
		exit;
	}
	
	/**
	 * Check for valid privilege 
	**/
	$op = $cl->load("privilege.check", ECROOT);
	$model['privtype'] = 'ENHANCSE_ADMIN';
	$model = $kernel->run($op, $model);
	if(!$model['valid']){
		$result['success'] = false;
		$result['msg'] = "Not Authorized";
		echo json_encode($result);
		exit;
	}
	
		$message = <<<MESSAGE
Hi,
	Your account at IIT BHU CSE has been created successfully.
	
	Username : {username}
	Password : {password}
	
	Thank you for using our services.
	
Regards,
Team IIT BHU CSE
MESSAGE;
	
	$op = $cl->load("student.create", ICROOT);
	$model['stname'] = $_POST['stname'];
	$model['strollno'] = $_POST['strollno'];
	$model['stemail'] = $_POST['stemail'];
	$model['stcourse'] = $_POST['stcourse'];
	$model['styear'] = $_POST['styear'];
	$model['ststatus'] = $_POST['ststatus'];
	$model['username'] = $_POST['stusername'];
	$model['subject'] = "[IIT BHU CSE] Account Registration";
	$model['message'] = $message;
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		$result['success'] = true;
		$result['msg'] = '<p class="success">The account has been created succesfully.<br />The new credentials have been mailed to the email.<br />[Password : '.$model['password'].']</p>';
	}
	else {
		$result['success'] = false;
		$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
	}

	echo json_encode($result);

?>