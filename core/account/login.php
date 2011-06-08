<?php 

	$result = array();

	if(!isset($_POST['username']) ||  !isset($_POST['password'])){
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
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
		$result['msg'] = array(
			'module' => 'login',
			'args' => array(
				'key' => $cookie_key_sent,
				'sid' => $model['sessionid']));
		
		//$op = $cl->load("log.record", ECROOT);
		//$model['message'] = "USER LOGIN with uid=".$model['uid']." and username=".$model['username'];
		//$model = $kernel->run($op, $model);
	}
	else {
		$result['success'] = false;
		$result['msg'] = "Invalid credentials";
	}

	echo json_encode($result);

?>