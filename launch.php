<?php 

	/**
	 *	Check for valid request
	**/
	if(!isset($_GET['uri'])){
		echo "Please specify service to be executed with get param uri=root.service.operation.type (Only workflows may be launched)";
		exit;
	}
	
	/**
	 *	IITBHUCSE Initialization
	**/
	define( 'INITROOT', dirname(__FILE__).'/' );
	require_once(INITROOT. 'sys/conf/iitbhucse.conf.php');
	
	/**
	 * Initialize ServicePackages and include the essential classes
	**/
	require_once(INITROOT. '../services/enhancse-core/init.php');
	require_once(INITROOT. '../services/iitbhucse-core/init.php');
	require_once(SBWFKERNEL);
	require_once(SBMDLLOADER);
	require_once(SBMYSQL);
	require_once(SBMAIL);
	
	/**
	 *	Parse request to get service URI
	**/
	$uri = $_GET['uri'];
	list($root, $service, $operation, $type) = explode('.', $uri);
	
	switch($root){
		case 'snowblozm' :
			$root = SBROOT;
			break;
		case 'sbdemo' :
			$root = SBROOT.'demo/';
			break;
		case 'enhancse-core' :
			$root = ECROOT;
			break;
		case 'iitbhucse-core' :
			$root = ICROOT;
			break;
		default :
			echo "Root not found";
			exit;
	}

	/**
	 *	WorkflowKernel instance and ModuleLoader instance
	**/
	$kernel = new WorkflowKernel();
	$ml = new ModuleLoader();
	
	/**
	 *	MySQL class instance
	**/
	$mysql = new Mysql($mysql_database, $mysql_user, $mysql_pass, $mysql_host);
	$memory = array();
	$memory['conn'] = $mysql;
	
	/**
	 *	Save the request host address and proxy address if any
	**/
	if(isset($_SERVER['REMOTE_ADDR']))
		$memory['address'] = $_SERVER['REMOTE_ADDR'];
	if(isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
		$memory['address'] .= " / ".$_SERVER["HTTP_X_FORWARDED_FOR"];
	
	/**
	 *	Configure the mail system
	**/
	Mail::initialize($mail_delegate, $mail_value, $mail_user, $mail_pass, $mail_from);
	
	/**
	 *	Parse request for request type if any
	**/
	$memory['type'] = isset($_GET['request']) ? $_GET['request'].'.'.$type : $type;
	
	/**
	 *	Launch the service (workflow only) using WorkflowKernel and ModuleLoader
	**/
	$service = array('service' => $ml->load($service.'.'.$operation.'.workflow', $root));
	$kernel->run($service, $memory);
	
	/**
	 *	Release resources
	**/
	$mysql->close();
	
?>