<?php 

	$result = array();

	if(!isset($_POST['username']) ||  !isset($_POST['password'])){
		$result['success'] = false;
		$result['msg'] = '<p class="error">Invalid Request</p>';
		echo json_encode($result);
		exit;
	}
	
	require_once('../../init.php');
	
	$op = $cl->load("user.login", ECROOT);
	$model['username'] = $_POST['username'];
	$model['password'] = $_POST['password'];
	$model['interval'] = 1*24*60*60;	// 1 day session
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		$result['success'] = true;
		$result['key'] = $cookie_key_sent;
		$result['sessionid'] = $model['sessionid'];
		$result['expires'] = 1;
		$result['msg'] = '<p class="success">Login Successful</p>';
		
		$op = $cl->load("log.record", ECROOT);
		$model['message'] = "USER LOGIN with uid=".$model['uid']." and username=".$model['username'];
		$model = $kernel->run($op, $model);
	}
	else {
		$result['success'] = false;
		$result['msg'] = '<p class="error">Invalid credentials</p>';
	}

	echo json_encode($result);

?>