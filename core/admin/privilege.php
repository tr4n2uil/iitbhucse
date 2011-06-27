<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
			case 'rvk' :
				if(isset($_POST['uid']) && isset($_POST['type']))
					$request = true;
				break;
			/*case 'rem' :*/
			case 'get' :
				if(isset($_POST['type']))
					$request = true;
				break;
			case 'all' :
				$request = true;
				break;
			default :
				break;
		}
	}
	
	if(!$request){
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
		$result['msg'] = '<p class="error">Session Expired. Please Login</p>';
		echo json_encode($result);
		exit;
	}
	$user = $model['uid'];
	
	/**
	 * Check for valid privilege 
	**/
	$op = $cl->load("privilege.check", ECROOT);
	$model['privtype'] = 'ENHANCSE_ADMIN';
	$model = $kernel->run($op, $model);
	if(!$model['valid']){
		$result['success'] = false;
		$result['msg'] = '<p class="error">Not Authorized</p>';
		echo json_encode($result);
		exit;
	}
	unset($model['privtype']);
	
	switch($_POST['do']){
		case 'add' :
			$op = $cl->load("privilege.grant", ECROOT);
			$model['guid'] = $_POST['uid'];
			$model['privtype'] = $_POST['type'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">The privilege has been granted succesfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'rvk' :
			$op = $cl->load("privilege.revoke", ECROOT);
			$model['ruid'] = $_POST['uid'];
			$model['privtype'] = $_POST['type'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">The privilege has been revoked succesfully</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("privilege.all", ECROOT);
			$model['privtype'] = $_POST['type'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['privileges'] = $model['privileges'];
				$result['type'] = $model['privtype'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		/*	
		case 'rem' :
			$op = $cl->load("user.delete", ECROOT);
			$model['uid'] = $_POST['uid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">User deleted successfully. ID='.$model['uid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		*/	
		case 'all' :
			$op = $cl->load("privilege.all", ECROOT);
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['privileges'] = $model['privileges'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		default :
			break;
	}
	
	echo json_encode($result);

?>