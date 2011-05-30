<?php 

	if(!isset($_COOKIE['iitbhucseid'])){
		echo "Invalid Cookie";
		exit;
	}

	require_once('../../init.php');
	
	$op = $cl->load("session.invalidate", ECROOT);
	$model['sessionid'] = substr($_COOKIE[$cookie_key], 2);
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		header("Location: $application_url");
	}
	else {
		echo "Invalid Request";
	}

?>