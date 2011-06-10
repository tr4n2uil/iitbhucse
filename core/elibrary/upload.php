<?php 

	$result = array();

	if(!isset($_FILES['book'])){
		echo <<< SCRIPT
		<script type="text/javascript">
			window.top.window.ServiceClient.Kernel.run([{
				service : window.top.window.ServiceClient.jquery.module.Status,
				selector : '#load-status',
				value : 'Invalid Request',
				hide : 1000,
				delay : 10000
			}]);
		</script>
SCRIPT;
		exit;
	}

	require_once('../../init.php');	
	
	$op = $cl->load("storage.upload", ECROOT);
	$model['filekey'] = 'book';
	$model['savepath'] = INITROOT. 'storage/elibrary/';
	$model = $kernel->run($op, $model);
	
	if($model['valid']){
		$msg = 'File successfully uploaded';
	}
	else {
		$msg = $model['msg'];
	}

	echo <<< SCRIPT
		<script type="text/javascript">
			window.top.window.ServiceClient.Kernel.run([{
				service : window.top.window.ServiceClient.jquery.module.Status,
				selector : '#load-status',
				value : '$msg',
				hide : 1000,
				delay : 10000
			}]);
		</script>
SCRIPT;

?>