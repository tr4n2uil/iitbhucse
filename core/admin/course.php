<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['crsid']) && isset($_POST['crsname']) && isset($_POST['crsdescription']) && isset($_POST['crspart']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['crsname']) && isset($_POST['crsdescription']) && isset($_POST['crspart'])) 
					$request = true;
				break;
			case 'rem' :
			case 'get' :
				if(isset($_POST['crsid']))
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
			$op = $cl->load("course.create", ICROOT);
			$model['crsid'] = $_POST['crsid'];
			$model['crsname'] = $_POST['crsname'];
			$model['crsdescription'] = $_POST['crsdescription'];
			$model['crspart'] = $_POST['crspart'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Course created successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			$op = $cl->load("course.edit", ICROOT);
			$model['crsid'] = $_POST['crsid'];
			$model['admin'] = true;
			$model['crsname'] = $_POST['crsname'];
			$model['crsdescription'] = $_POST['crsdescription'];
			$model['crspart'] = $_POST['crspart'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Course credentials edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("course.info", ICROOT);
			$model['crsid'] = $_POST['crsid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['course'] = $model['course'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'rem' :
			$op = $cl->load("course.delete", ICROOT);
			$model['crsid'] = $_POST['crsid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Course deleted successfully. ID='.$model['crsid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'all' :
			$op = $cl->load("Course.all", ICROOT);
			$model['allparts'] = true;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['courses'] = $model['courses'];
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