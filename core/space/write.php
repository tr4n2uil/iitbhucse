<?php 

	function respond($msg, $sel='#file-edit-panel'){
		echo <<< SCRIPT
		<script type="text/javascript">
			window.top.window.ServiceClient.Kernel.run([{
				service : window.top.ServiceClient.jquery.module.ElementStatus,
				selector : '$sel input[name=submit]'
			},{
				service : window.top.window.ServiceClient.jquery.module.AlertStatus,
				selector : '$sel div.status',
				value : '$msg'
			}]);
		</script>
SCRIPT;
		exit;
	}

	if(!isset($_POST['spid']) || !isset($_POST['stgmime']) || !isset($_FILES['stgfile'])){
		respond('<p class="error">Invalid Request</p>');
	}

	/**
	 * Check for valid user 
	**/
	require_once('../../init.php');	
	if(!$model['valid'] || !isset($model['uid'])){
		respond('<p class="error">Session Expired. Please Login</p>');
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
	$model['spid'] = $_POST['spid'];
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']){
		respond('<p class="error">'.$model['msg'].'</p>');
	}
		
	$space = $model['space'];
	
	$op = $cl->load("storage.write", ECROOT);
	$model['stgid'] = $space['stgid'];
	$model['protection'] = isset($_POST['stgkey']) ? $_POST['stgkey'] : '';		
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']){
		respond('<p class="error">'.$model['msg'].'</p>');
	}
	
	$storage = $model['storage'];
	
	$op = $cl->load("storage.upload", ECROOT);
	$model['filekey'] = 'stgfile';
	$model['rename'] = $storage['filename'];
	$model['savepath'] = $storage['filepath'];
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']){
		respond('<p class="error">'.$model['msg'].'</p>');
	}
	
	$op = $cl->load("storage.update", ECROOT);
	$model['stgid'] = $storage['stgid'];
	$model['mime'] = $_POST['stgmime'];
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']){
		respond('<p class="error">'.$model['msg'].'</p>');
	}
	
	$op = $cl->load("space.edit", ECROOT);
	$model['spvfname'] = $model['filename'];
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		respond('<p class="success">File successfully uploaded</p>');
	}
	else {
		respond('<p class="error">'.$model['msg'].'</p>');
	}

?>