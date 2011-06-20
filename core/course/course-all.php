<?php 

	$result = array();
	
	
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
	 * Get all parts
	**/
	if(isset($_POST['getparts'])){
		$op = $cl->load("course.all", ICROOT);
		$model['getparts'] = true;
		$model = $kernel->run($op, $model);
	
		if($model['valid']){
			$result['success'] = true;
			$result['courses'] = $model['courses'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}

	/**
	 * Get all courses
	**/
	else if(isset($_POST['allparts'])){
		$op = $cl->load("course.all", ICROOT);
		$model['allparts'] = true;
		$model = $kernel->run($op, $model);
	
		if($model['valid']){
			$result['success'] = true;
			$result['courses'] = $model['courses'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}
	
	/**
	 * Get courses by part
	**/
	else if(isset($_POST['crspart'])){
		$op = $cl->load("course.all", ICROOT);
		$model['crspart'] = $_POST['crspart'];
		$model = $kernel->run($op, $model);
	
		if($model['valid']){
			$result['success'] = true;
			$result['courses'] = $model['courses'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}
	
	else{
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
	}
	
	echo json_encode($result);

?>