<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['bookname']) && isset($_POST['bookauthor']) && isset($_POST['bookdescription']) && isset($_POST['bookcollection']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['bookid']) && isset($_POST['bookname']) && isset($_POST['bookauthor']) && isset($_POST['bookdescription']) && isset($_POST['bookcollection']))
					$request = true;
				break;
			case 'get' :
			case 'rem' :
				if(isset($_POST['bookid']))
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
			
			$op = $cl->load("elibrary.add", ICROOT);
			$model['bookname'] = $_POST['bookname'];
			$model['bookauthor'] = $_POST['bookauthor'];
			$model['bookdescription'] = $_POST['bookdescription'];
			$model['bookcollection'] = $_POST['bookcollection'];
			$model['bookpages'] = isset($_POST['bookpages']) ? $_POST['bookpages'] : null;
			$model['bookpath'] = INITROOT.'storage/elibrary/';
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
			$op = $cl->load("elibrary.edit", ICROOT);
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
			$op = $cl->load("elibrary.get", ICROOT);
			$model['bookid'] = $_POST['bookid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['ebook'] = $model['ebook'];
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
			
			$op = $cl->load("elibrary.remove", ICROOT);
			$model['bookid'] = $_POST['bookid'];
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
			
			$op = $cl->load("elibrary.all", ICROOT);
			$model['admin'] = $admin;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['ebooks'] = $model['ebooks'];
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