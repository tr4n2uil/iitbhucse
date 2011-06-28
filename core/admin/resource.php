<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['rsrcname']) && isset($_POST['resource']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['rsrcid']) && isset($_POST['resource']))
					$request = true;
				break;
			case 'get' :
			case 'rem' :
				if(isset($_POST['rsrcid']))
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
		$result['msg'] = "Invalid Request";
		echo json_encode($result);
		exit;
	}
	
	
	/**
	 * Check for valid user 
	**/
	require_once('../../init.php');	
	if(!$model['valid'] || !isset($model['uid'])){
		$result['success'] = false;
		$result['msg'] = "Session Expired. Please Login";
		echo json_encode($result);
		exit;
	}
	
	/**
	 * Check for valid privilege 
	**/
	$op = $cl->load("privilege.check", ECROOT);
	$model['privtype'] = 'ENHANCSE_ADMIN';
	$model = $kernel->run($op, $model);
	if(!$model['valid']){
		$result['success'] = false;
		$result['msg'] = "Not Authorized";
		echo json_encode($result);
		exit;
	}
	
	switch($_POST['do']){
		case 'add' :
			$op = $cl->load("resource.create", ECROOT);
			$model['rsrcname'] = $_POST['rsrcname'];
			$model['resource'] = $_POST['resource'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Resource created successfully. ID='.$model['rsrcid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			$op = $cl->load("resource.edit", ECROOT);
			$model['rsrcid'] = $_POST['rsrcid'];
			$model['resource'] = $_POST['resource'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Resource edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'get' :
			$op = $cl->load("resource.get", ECROOT);
			$model['rsrcid'] = $_POST['rsrcid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['resource'] = $model['resource'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'rem' :
			$op = $cl->load("resource.delete", ECROOT);
			$model['rsrcid'] = $_POST['rsrcid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Resource deleted successfully. ID='.$model['rsrcid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'all' :
			$op = $cl->load("resource.all", ECROOT);
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['resources'] = $model['resources'];
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