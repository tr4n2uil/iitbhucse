<?php 
	/**
	 *	IITBHUCSE Initialization
	**/
	define( 'INITROOT', dirname(__FILE__).'/' );
	require_once(INITROOT. 'sys/conf/iitbhucse.conf.php');
	
	/**
	 * Initialize ServicePackages and include the essential classes
	**/
	require_once(INITROOT. '../services/enhancse-core/init.php');
	require_once(SBKERNEL);
	require_once(SBCOMLOADER);
	require_once(SBMYSQL);
	require_once(SBMAIL);

	/**
	 *	ServiceKernel instance and ComponentLoader instance
	**/
	$kernel = new ServiceKernel();
	$cl = new ComponentLoader();
	
	/**
	 *	MySQL class instance
	**/
	$mysql = new Mysql($mysql_database, $mysql_user, $mysql_pass, $mysql_host);
	$model = array();
	$model['conn'] = $mysql;
	
	/**
	 *	Save the request host address and proxy address if any
	**/
	if(isset($_SERVER['REMOTE_ADDR']))
		$model['address'] = $_SERVER['REMOTE_ADDR'];
	if(isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
		$model['address'] .= " / ".$_SERVER["HTTP_X_FORWARDED_FOR"];
	
	/**
	 *	Configure the mail system
	**/
	Mail::initialize($mail_delegate, $mail_value, $mail_user, $mail_pass, $mail_from);
	
	/**
	 *	Get the previous session if any
	**/
	if(!isset($_COOKIE[$cookie_key])){
		$model['valid'] = false;
		$model['uid'] = null;
	}
	else {
		$op = $cl->load("session.get", ECROOT);
		$model['sessionid'] = $_COOKIE[$cookie_key];
		$model = $kernel->run($op, $model);
	}
	
?>
