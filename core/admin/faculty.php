<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['fname']) && isset($_POST['fdesignation']) && isset($_POST['fqualification']) && isset($_POST['femail']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['fid']) && isset($_POST['fname']) && isset($_POST['fdesignation']) && isset($_POST['fqualification'])) 
					$request = true;
				break;
			case 'rem' :
				if(isset($_POST['fid']))
					$request = true;
				break;
			case 'get' :
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
	$admin = false;
	$op = $cl->load("privilege.check", ECROOT);
	$model['privtype'] = 'ENHANCSE_ADMIN';
	$model = $kernel->run($op, $model);
	if($model['valid']){
		$admin = true;
	}
	$model['privtype'] = 'FACULTY_ADMIN';
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
			
			$op = $cl->load("faculty.create", ICROOT);
			$model['fname'] = $_POST['fname'];
			$model['username'] = $_POST['username'];
			$model['femail'] = $_POST['femail'];
			$model['fqualification'] = $_POST['fqualification'];
			$model['fdesignation'] = $_POST['fdesignation'];
			$model['fphone'] = $_POST['fphone'];
			$model['fstatus'] = $_POST['fstatus'];
			$model['finterest'] = $_POST['finterest'];
			$model['mail'] = false;
			$model['frspath'] = 'storage/resume/';
			$model['fphpath'] = 'storage/photo/';
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Faculty created succesfully.<br />Password : '.$model['password'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("faculty.edit", ICROOT);
			$model['fid'] = $_POST['fid'];
			$model['admin'] = $admin;
			$model['fphone'] = $_POST['fphone'];
			$model['finterest'] = $_POST['finterest'];
			
			if($admin){
			$model['fname'] = $_POST['fname'];
			$model['fqualification'] = $_POST['fqualification'];
			$model['fdesignation'] = $_POST['fdesignation'];
			$model['fstatus'] = $_POST['fstatus'];
			}
			$model = $kernel->run($op, $model);
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Faculty details edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("faculty.info", ICROOT);
			$model['fid'] = isset($_POST['fid']) ? $_POST['fid'] : $user;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['faculty'] = $model['faculty'];
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
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("faculty.all", ICROOT);
			$model['fstatus'] = "1 or 2";
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