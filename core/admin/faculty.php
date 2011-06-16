<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['newfname']) && isset($_POST['newfdesignation']) && isset($_POST['newfqualification']) && isset($_POST['email']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['fid']) && isset($_POST['newfname']) && isset($_POST['newfdesignation']) && isset($_POST['newfqualification']) && isset($_POST['email'])) 
					$request = true;
				break;
			case 'rem' :
			case 'get' :
				if(isset($_POST['fid']))
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
	$user = $model['uid'];
	
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
			$op = $cl->load("faculty.create", ICROOT);
			$model['fname'] = $_POST['fname'];
			$model['femail'] = $_POST['femail'];
			$model['fqualification'] = $_POST['fqualification'];
			$model['fdesignation'] = $_POST['fdesignation'];
			$model['fphone'] = $_POST['fphone'];
			$model['interests'] = $_POST['interests'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Faculty created successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			$op = $cl->load("faculty.edit", ICROOT);
			$model['fid'] = $_POST['fid'];
			$model['admin'] = true;
			$model['fname'] = $_POST['newfname'];
			$model['femail'] = $_POST['femail'];
			$model['fqualification'] = $_POST['newfqualification'];
			$model['fdesignation'] = $_POST['newfdesignation'];
			$model['fphone'] = $_POST['newfphone'];
			$model['interests'] = $_POST['newinterests'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Faculty credentials edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("faculty.info", ICROOT);
			$model['fid'] = $_POST['fid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['faculty'] = $model['faculty'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'rem' :
			$op = $cl->load("faculty.delete", ICROOT);
			$model['fid'] = $_POST['fid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Faculty deleted successfully. ID='.$model['fid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'all' :
			$op = $cl->load("faculty.all", ICROOT);
			$model['fstatus'] = 1;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['faculty'] = $model['status'];
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