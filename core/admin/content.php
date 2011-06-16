<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	$request = false;
	if(isset($_POST['do'])){
		switch($_POST['do']){
			case 'add' :
				if(isset($_POST['cntname']) && isset($_POST['cntstype']) && isset($_POST['cntstyle']) && isset($_POST['cntttype']) && isset($_POST['cnttpl'])&& isset($_POST['cntdtype']) && isset($_POST['cntdata']))
					$request = true;
				break;
			case 'edit' :
				if(isset($_POST['cntid']) && isset($_POST['cntstype']) && isset($_POST['cntstyle']) && isset($_POST['cntttype']) && isset($_POST['cnttpl']) && isset($_POST['cntdtype']) && isset($_POST['cntdata']))
					$request = true;
				break;
			case 'get' :
			case 'rem' :
				if(isset($_POST['cntid']))
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
	 * Check for admin privilege 
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
				$result['msg'] = "Not Authorized";
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("content.create", ECROOT);
			$model['cntname'] = $_POST['cntname'];
			$model['cntowner'] = $model['uid'];
			$model['cntstype'] = $_POST['cntstype'];
			$model['cntstyle'] = $_POST['cntstyle'];
			$model['cntttype'] = $_POST['cntttype'];
			$model['cnttpl'] = $_POST['cnttpl'];
			$model['cntdtype'] = $_POST['cntdtype'];
			$model['cntdata'] = $_POST['cntdata'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Content created successfully. ID='.$model['cntid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'edit' :
			$op = $cl->load("content.edit", ECROOT);
			$model['admin'] = $admin;
			$model['cntowner'] = $model['uid'];
			$model['cntid'] = $_POST['cntid'];
			$model['cntstype'] = $_POST['cntstype'];
			$model['cntstyle'] = $_POST['cntstyle'];
			$model['cntttype'] = $_POST['cntttype'];
			$model['cnttpl'] = $_POST['cnttpl'];
			$model['cntdtype'] = $_POST['cntdtype'];
			$model['cntdata'] = $_POST['cntdata'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['msg'] = '<p class="success">Content edited successfully</p>';
			}
			else {
				$result['success'] = false;
				$result['msg'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
		
		case 'get' :
			$op = $cl->load("content.get", ECROOT);
			$model['cntid'] = $_POST['cntid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['content'] = $model['content'];
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
				$result['msg'] = "Not Authorized";
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("content.delete", ECROOT);
			$model['cntid'] = $_POST['cntid'];
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['template'] = '<p class="success">Content deleted successfully. ID='.$model['cntid'].'</p>';
			}
			else {
				$result['success'] = false;
				$result['template'] = '<p class="error">'.$model['msg'].'</p>';
			}
			break;
			
		case 'all' :
			if(!$admin){
				$result['success'] = false;
				$result['msg'] = "Not Authorized";
				echo json_encode($result);
				exit;
			}
			
			$op = $cl->load("content.all", ECROOT);
			$model = $kernel->run($op, $model);
			
			if($model['valid']){
				$result['success'] = true;
				$result['contents'] = $model['contents'];
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