<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['isbn']) && isset($_POST['bookid']) && isset($_POST['bookname']) && isset($_POST['bookauthor']) && isset($_POST['bookdescription']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['isbn']) && isset($_POST['bookid']) && isset($_POST['bookname']) && isset($_POST['bookauthor']) && isset($_POST['bookdescription']))
					$request = true;
				break;
			case 'rem' :
				if(isset($_POST['isbn']))
					$request = true;
				break;
			case 'get' :
			case 'all' :
				$request = true;
				break;
			case 'issue' :
				if(isset($_POST['issuedto']) && isset($_POST['isbn']))
					$request = true;
				break;
			case 'return' :
				if(isset($_POST['isbn']))
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
			
			$op = $cl->load("library.add", ICROOT);
			$model['isbn'] = $_POST['isbn'];
			$model['bookid'] = $_POST['bookid'];
			$model['bookname'] = $_POST['bookname'];
			$model['bookauthor'] = $_POST['bookauthor'];
			$model['bookdescription'] = $_POST['bookdescription'];
			$model['bookcollection'] = $_POST['bookcollection'];
			$model['bookpages'] = isset($_POST['bookpages']) ? $_POST['bookpages'] : null;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Book Added Successfully.</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			
			break;			

		case 'edit' :
			
			$op = $cl->load("library.edit", ICROOT);
			$model['isbn'] = $_POST['isbn'];
			$model['bookid'] = $_POST['bookid'];
			$model['bookname'] = $_POST['bookname'];
			$model['bookauthor'] = $_POST['bookauthor'];
			$model['bookdescription'] = $_POST['bookdescription'];
			$model['bookcollection'] = $_POST['bookcollection'];
			$model['bookpages'] = isset($_POST['bookpages']) ? $_POST['bookpages'] : null;			
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Book edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("library.get", ICROOT);
			$model['isbn'] = $_POST['isbn'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['book'] = $model['book'];
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
			
			$op = $cl->load("library.remove", ICROOT);
			$model['isbn'] = $_POST['isbn'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Book removed successfully.</p>';
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
			
			$op = $cl->load("library.all", ICROOT);
			$model['admin'] = $admin;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['books'] = $model['books'];
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'issue' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("library.issue", ICROOT);
			$model['issuedto'] = $_POST['issuedto'];
			$model['isbn'] = $_POST['isbn'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Book issued successfully.</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
			case 'return' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = '<p class="error">Not Authorized</p>';
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("library.return", ICROOT);
			$model['isbn'] = $_POST['isbn'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Book returned successfully.</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		default :
			break;
	}
	
	echo json_encode($result);

?>