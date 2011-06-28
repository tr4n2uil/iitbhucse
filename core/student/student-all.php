<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	if(!(isset($_POST['styear']) && isset($_POST['stcourse'])) && !isset($_POST['allyear'])){
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
	
	if(isset($_POST['styear']) && isset($_POST['stcourse'])){
		/**
		 * Get students for the year
		**/
		$op = $cl->load("student.all", ICROOT);
		$model['styear'] = $_POST['styear'];
		$model['stcourse'] = $_POST['stcourse'];
		$model = $kernel->run($op, $model);
		
		if($model['valid']){
			$result['success'] = true;
			$result['students'] = $model['students'];
			$result['styear'] = $model['styear'];
			$result['stcourse'] = $model['stcourse'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}
	
	if(isset($_POST['allyear'])){
		/**
		 * Get all the years
		**/
		$op = $cl->load("student.all", ICROOT);
		$model['allyear'] = true;
		$model = $kernel->run($op, $model);
		
		if($model['valid']){
			$result['success'] = true;
			$result['allyear'] = $model['students'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}

	echo json_encode($result);

?>