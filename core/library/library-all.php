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
	 * Get all collections
	**/
	if(isset($_POST['getcollections'])){
		$op = $cl->load("library.all", ICROOT);
		$model['getcollections'] = true;
		$model = $kernel->run($op, $model);
	
		if($model['valid']){
			$result['success'] = true;
			$result['books'] = $model['books'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}

	/**
	 * Get all books
	**/
	else if(isset($_POST['allbooks'])){
		$op = $cl->load("library.all", ICROOT);
		$model['allbooks'] = true;
		$model = $kernel->run($op, $model);
	
		if($model['valid']){
			$result['success'] = true;
			$result['books'] = $model['books'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
	}
	
	/**
	 * Get books by collection
	**/
	else if(isset($_POST['bookcollection'])){
		$op = $cl->load("library.all", ICROOT);
		$model['bookcollection'] = $_POST['bookcollection'];
		$model = $kernel->run($op, $model);
	
		if($model['valid']){
			$result['success'] = true;
			$result['books'] = $model['books'];
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