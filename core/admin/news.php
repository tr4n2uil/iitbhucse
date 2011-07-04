<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['newstitle']) && isset($_POST['newsauthor']) && isset($_POST['newsdescription']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['newsid']) && isset($_POST['newstitle']) && isset($_POST['newsauthor']) && isset($_POST['newsdescription']))
					$request = true;
				break;
			case 'get' :
			case 'rem' :
				if(isset($_POST['newsid']))
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
	$model['privtype'] = 'NEWS_ADMIN';
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
			
			$op = $cl->load("news.create", ICROOT);
			$model['newstitle'] = $_POST['newstitle'];
			$model['newsauthor'] = $_POST['newsauthor'];
			$model['newsdescription'] = $_POST['newsdescription'];
			$model['newscontent'] = isset($_POST['newscontent']) ? $_POST['newscontent'] : null;
			$model['newsexpiry'] = isset($_POST['newsexpiry']) ? $_POST['newsexpiry'] : null;
			$model['newspath'] = 'storage/news/';
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">News Added Successfully.</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			$op = $cl->load("news.edit", ICROOT);
			$model['newsid'] = $_POST['newsid'];
			$model['newstitle'] = $_POST['newstitle'];
			$model['newsauthor'] = $_POST['newsauthor'];
			$model['newsdescription'] = $_POST['newsdescription'];
			$model['newscontent'] = isset($_POST['newscontent']) ? $_POST['newscontent'] : null;
			$model['newsexpiry'] = isset($_POST['newsexpiry']) ? $_POST['newsexpiry'] : null;			
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">News edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'get' :
			$op = $cl->load("news.info", ICROOT);
			$model['newsid'] = $_POST['newsid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['news'] = $model['news'];
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
			
			$op = $cl->load("news.delete", ICROOT);
			$model['newsid'] = $_POST['newsid'];
			$model['admin'] = $admin;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">News Deleted successfully.</p>';
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
			
			$op = $cl->load("news.all", ICROOT);
			$model['admin'] = $admin;
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['news'] = $model['news'];
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