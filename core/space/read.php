<?php 

	function respond($msg){
		echo <<< HTML
		<h1>$msg</h2>
HTML;
		exit;
	}

	if(!isset($_GET['spid']) && !isset($_GET['vfile'])){
		respond('Invalid Request');
	}

	/**
	 * Check for valid user 
	**/
	require_once('../../init.php');	
	if(!$model['valid'] || !isset($model['uid'])){
		respond('Session Expired. Please Login');
	}
	$user = $model['uid'];
	
	/**
	 * Check for admin privilege 
	**/
	$admin = false;
	$op = $cl->load("privilege.check", ECROOT);
	$model['privtype'] = 'ENHANCSE_ADMIN';
	$model = $kernel->run($op, $model);
	if($model['valid']){
		$admin = true;
	}
	
	$model['owner'] = $user;
	$model['admin'] = $admin;
	
	$op = $cl->load("space.select", ECROOT);
	if(isset($_GET['spid'])){ 
		$model['spid'] = $_GET['spid']; 
	}
	if(isset($_GET['vfile'])){ 
		$model['vfile'] = $_GET['vfile']; 
	}
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']){
		respond($model['msg']);
	}
		
	$space = $model['space'];
	
	$op = $cl->load("storage.read", ECROOT);
	$model['stgid'] = $space['stgid'];
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']){
		respond($model['msg']);
	}
	
	$storage = $model['storage'];
	$op = $cl->load("storage.download", ECROOT);
	$model['file'] = $storage['filepath'].$storage['filename'];
	$model['asname'] = $storage['filename'];
	$model['mime'] = $storage['mime'];
	$model['size'] = $storage['size'];
	$model = $kernel->start($op, $model);
	
	if(!$model['valid']){
		respond($model['msg']);
	}

?>