<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			/*case 'edit' :
				if(isset($_POST['stuid']) && isset($_POST['stcgpa']) && isset($_POST['stinterest']))
					$request = true;
				break;*/
			case 'rem' :
				if(isset($_POST['spid']))
					$request = true;
				break;
				
			case 'get' :
				if(isset($_POST['spid']))
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
	$admin = false;
	$op = $cl->load("privilege.check", ECROOT);
	$model['privtype'] = 'ENHANCSE_ADMIN';
	$model = $kernel->run($op, $model);
	if($model['valid']){
		$admin = true;
	}
	
	switch($_POST['do']){
		case 'add' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("storage.create", ECROOT);
			$model['stgname'] = 'File.file';
			$model['filepath'] = '/storage/file/';
			$model['filename'] = $model['stgname'];
			$model['mime'] = 'text/plain';
			$model['size'] = 0;
			$model['owner'] = $model['uid'];
			$model['access'] = 2;
			$model['protection'] = '';
			$model = $kernel->run($op, $model);
			
			if(!$model['valid']){
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
				break;
			}
			
			$op = $cl->load("space.add", ECROOT);
			$model['spvfpath'] = '/file/';
			$model['spvfname'] = $model['stgname'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Space entry added succesfully</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("space.select", ECROOT);
			$model['spid'] = $_POST['spid'];
			$model['admin'] = $admin;
			$model['owner'] = $user;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['space'] = $model['space'];
				$result['admin'] = $admin;
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;

		case 'rem' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("space.remove", ECROOT);
			$model['spid'] = $_POST['spid'];
			$model['admin'] = $admin;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Space Entry deleted successfully. ID='.$model['spid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;

		case 'all' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("space.list", ECROOT);
			if(isset($_POST['spname'])){
				$result['spname'] = $model['spname'] = $_POST['spname'];
			}
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['spaces'] = $model['spaces'];
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