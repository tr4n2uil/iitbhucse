<?php 

	require_once('init.php');
	require_once(INITROOT . 'sys/lib/Document.class.php');
	
	$model['title'] = "Department of Computer Engineering IT BHU";
	$model['styles'] = array('default.css', 'jquery.css', 'iitbhucse.css');
	Document::header($model);
	
	include(INITROOT. 'ui/html/header.html');
	include(INITROOT. 'ui/html/menu.html');
	
?>
		<div id="quick-panel">
			<?php include(INITROOT. 'ui/html/login.html'); ?>
		</div>
		
		<div id="main-container">
			<?php include(INITROOT. 'ui/html/home.html'); ?>
		</div>
		
<?php 

		$model = array();
		$model['footer'] = "<p>Powered by the enhanCSE Development Team</p>";
		$model['scripts'] = array(
			'jQuery Core' => 'jquery-1.6.1.min.js',
			'jQuery UI' => 'jquery-ui-1.8.13.min.js',
			'jQuery Templates' => 'jquery.tmpl.js'
		);
		Document::footer($model);	
		
?>
	<script type="text/javascript">
		$(document).ready(function(){
			$('#load-status')
				.html('Initializing ...')
				.fadeOut(3000);
		});
	</script>
	</body>
</html>