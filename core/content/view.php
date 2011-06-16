<?php 

	$result = array();
	
	/**
	 * Check for valid request 
	**/
	if(!isset($_POST['cntid'])){
		$result['success'] = false;
		$result['msg'] = "Invalid Request";
		echo json_encode($result);
		exit;
	}
	
	/**
	 * Check for valid user and set flag
	**/
	$user = 0;
	$admin = false;
	require_once('../../init.php');	
	if($model['valid'] && isset($model['uid'])){
		$user = $model['uid'];
		
		/**
		 * Check for admin privilege 
		**/
		$op = $cl->load("privilege.check", ECROOT);
		$model['privtype'] = 'ENHANCSE_ADMIN';
		$model = $kernel->run($op, $model);
		if($model['valid']){
			$admin = true;
		}
	}
	
	$op = $cl->load("content.view", ECROOT);
	$model['cntid'] = $_POST['cntid'];
	$model['cssroot'] = INITROOT. 'storage/styles/';
	$model['tplroot'] = INITROOT. 'storage/templates/';
	$model['dataroot'] = INITROOT. 'storage/data/';
	$model = $kernel->run($op, $model);
	
	if(!$model['valid']) {
		$result['success'] = false;
		$result['template'] = '<p class="error">'.$model['msg'].'</p>';
		echo json_encode($result);
		exit;
	}
	
	$result['success'] = true;
	$cntid = $model['cntid'];
	
	if($admin || $user == $model['cntowner'])
		$editlink = <<<EDIT
	<div id="content-options-container" class="horizontal-menu">
	<fieldset>
		<legend>Content Options</legend>
		<ul>
		<li><a href="#tplload:cntr=#main-container:tpl=tpl-cnt-edt:url=core/admin/content.php:arg=do~get&cntid~$cntid" 
				class="navigate" >Edit</a></li>
		</ul>
	</fieldset>
	</div>
EDIT;
		
	$result['template'] = $model['template'].$editlink;
	$result['content'] = $model['data'];
	echo json_encode($result);

?>