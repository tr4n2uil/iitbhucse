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
	 * Initialize ServicePackages
	**/
	require_once(INITROOT. '../services/snowblozm/init.php');
	require_once(INITROOT. '../services/enhancse-core/init.php');
	require_once(INITROOT. '../services/iitbhucse-core/init.php');
	
	/**
	 *	Initialize Snowblozm ServiceProviders
	**/
	Snowblozm::add('sb-local-demo', array(
		'root' => SBROOT.'demo/v2/',
		'location' => 'local'
	));
	
	Snowblozm::add('sb-remote-demo', array(
		'root' => 'http://localhost/iitbhucse/launch.php?uri=',
		'location' => 'remote',
		'type' => 'json',
		'map' => 'sb-local-demo',
		'key' => ''
	));
	
	/**
	 *	WorkflowKernel instance and memory array
	**/
	require_once(SBWFKERNEL);
	$kernel = new WorkflowKernel();
	$memory = array();
	
	/**
	 *	MySQL class instance
	**/
	require_once(SBMYSQL);
	$mysql = new Mysql($mysql_database, $mysql_user, $mysql_pass, $mysql_host);
	$memory['conn'] = $mysql;
	
	/**
	 *	Configure the mail system
	**/
	require_once(SBMAIL);
	Mail::initialize($mail_delegate, $mail_value, $mail_user, $mail_pass, $mail_from);
	
	/**
	 *	Save the request host address and proxy address if any
	**/
	if(isset($_SERVER['REMOTE_ADDR']))
		$memory['address'] = $_SERVER['REMOTE_ADDR'];
	if(isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
		$memory['address'] .= " / ".$_SERVER["HTTP_X_FORWARDED_FOR"];
	
	/**
	 *	Parse request to get service URI and restrict access to services
	**/
	$uri = $_GET['uri'];
	list($root, $service, $operation, $type) = explode('.' ,$uri);

	/*if(!in_array($root, array('sb-local-demo'))){
		echo 'Access Denied';
		exit;
	}
	
	/**
	 *	Parse request for request type if any
	**/
	$reqtype = isset($_GET['request']) ? $_GET['request'] : $type;
	
	/**
	 *	Launch the service (workflow only) using WorkflowKernel
	**/
	$service = array(
		'service' => $root.'.'.$service.'.'.$operation.'.workflow', 
		'input' => array('conn' => 'conn', 'address' => 'address'),
		'request-type' => $reqtype,
		'response-type' => $type
	);
	$kernel->run($service, $memory);
	
	/**
	 *	Release resources
	**/
	$mysql->close();
	
?>