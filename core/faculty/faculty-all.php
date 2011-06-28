<?php 

	$result = array();

	/**
	 * Check for valid request 
	**/
	if(!isset($_POST['all'])){
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
		echo json_encode($result);
		exit;
	}
	
	
	/**
	 * Check for valid user and set flag
	**/
	require_once('../../init.php');	
	if($model['valid'] && isset($model['uid'])){
		$user = $model['uid'];
		$edit = true;
		/**
		 * Check for admin privilege and set flag
		**/
		$op = $cl->load("privilege.check", ECROOT);
		$model['privtype'] = 'ENHANCSE_ADMIN';
		$model = $kernel->run($op, $model);
		if($model['valid']){
			$result['admin'] = true;
		}
	}
	
	
		/**
		 * Get faculty for the status
		**/
		$op = $cl->load("faculty.all", ICROOT);
		$model['fstatus'] = "1 or 2";
		$model = $kernel->run($op, $model);
		
		if($model['valid']){
			$result['success'] = true;
			$result['faculty'] = $model['status'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	

	echo json_encode($result);

?>