<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['username']) && isset($_POST['stemail']) && isset($_POST['stname']) && isset($_POST['stcourse']) && isset($_POST['styear']) && isset($_POST['strollno']) && isset($_POST['ststatus']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['stuid']) && isset($_POST['stname']) && isset($_POST['stcourse']) && isset($_POST['styear']) && isset($_POST['strollno']) && isset($_POST['ststatus']))
					$request = true;
				break;
			case 'rem' :
			case 'get' :
				if(isset($_POST['stuid']))
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
			$op = $cl->load("student.create", ICROOT);
			$model['username'] = $_POST['username'];
			$model['stname'] = $_POST['stname'];
			$model['stemail'] = $_POST['stemail'];
			$model['strollno'] = $_POST['strollno'];
			$model['stcourse'] = $_POST['stcourse'];
			$model['styear'] = $_POST['styear'];
			$model['ststatus'] = $_POST['ststatus'];
			$model['mail'] = false;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Student account created succesfully.<br />Password : '.$model['password'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			$op = $cl->load("student.edit", ICROOT);
			$model['stuid'] = $_POST['stuid'];
			$model['admin'] = true;
			$model['stname'] = $_POST['stname'];
			$model['strollno'] = $_POST['strollno'];
			$model['stcourse'] = $_POST['stcourse'];
			$model['styear'] = $_POST['styear'];
			$model['ststatus'] = $_POST['ststatus'];
			if(isset($_POST['stcgpa'])){
				$model['stcgpa'] = $_POST['stcgpa'];
			}
			if(isset($_POST['stinternship'])){
				$model['stinternship'] = $_POST['stinternship'];
			}
			if(isset($_POST['stplacement'])){
				$model['stplacement'] = $_POST['stplacement'];
			}
			if(isset($_POST['stinterest'])){
				$model['stinterest'] = $_POST['stinterest'];
			}
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Student credentials edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("student.info", ICROOT);
			$model['stuid'] = $_POST['stuid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['student'] = $model['student'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'rem' :
			$op = $cl->load("student.delete", ICROOT);
			$model['stuid'] = $_POST['stuid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Student deleted successfully. ID='.$model['stuid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'all' :
			$op = $cl->load("student.all", ICROOT);
			$model['stcourse'] = "1 or 2";
			$model['admin'] = true;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['students'] = $model['students'];
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