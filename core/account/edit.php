<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	if(!isset($_POST['username']) ||  !isset($_POST['password']) || !isset($_POST['newusername']) ||  !isset($_POST['newpassword'])){
		$result['success'] = false;
		$result['msg'] = '<p class="error">Invalid Request</p>';
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
	
	$op = $cl->load("user.edit", ECROOT);
	$model['admin'] = false;
	$model['username'] = $_POST['username'];
	$model['password'] = $_POST['password'];
	$model['newusername'] = $_POST['newusername'];
	$model['newpassword'] = $_POST['newpassword'];
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		$result['success'] = true;
		$result['msg'] = '<p class="success">Account Credentials edited successfully</p>';
	}
	else {
		$result['success'] = false;
		$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
	}

	echo json_encode($result);

?>