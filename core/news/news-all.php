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
		 * Get news updates
		**/
		if(isset($_POST['top'])){
			$op = $cl->load("news.all", ICROOT);
			$model['count'] = $_POST['top'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['news'] = $model['news'];
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
		}
		/**
		 * Get all news
		**/
		if(isset($_POST['all'])){
		$op = $cl->load("news.all", ICROOT);
		$model['all'] = $_POST['all'];
		$model = $kernel->run($op, $model);
		
		if($model['valid']){
			$result['success'] = true;
			$result['news'] = $model['news'];
		}
		else {
			$result['success'] = false;
			$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
		}
		}
	echo json_encode($result);

?>