<?php 

	require_once('init.php');
	require_once(INITROOT . 'sys/lib/Document.class.php');
	
	$model['title'] = "Department of Computer Engineering IT BHU";
	$model['styles'] = array('default.css', 'jquery.css', 'iitbhucse-styles.css', 'redmond/jquery-ui-1.8.13.custom.css');
	Document::header($model);
	
	include(INITROOT. 'ui/html/header.html');
	include(INITROOT. 'ui/html/menu.html');
	
?>
		<div id="quick-panel">
			<?php 
				if($model['valid'] && isset($model['uid'])){
					echo '<p class="success" style="margin: 0.5em;"><a href="core/account/logout.php">Logout</a></p>';
				}
				else {
					include(INITROOT. 'ui/html/login.html');
				}
			?>
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
			'jQuery Templates' => 'jquery.tmpl.js',
			'jQuery Cookie' => 'jquery.cookie.js',
			'jQuery ServiceClient' => 'jquery-serviceclient.js',
			'IITBHUCSE Modules' => 'iitbhucse-jquery.js',
			'IITBHUCSE Templates' => 'iitbhucse-templates.js'
		);
		Document::footer($model);	
		
?>
	<script type="text/javascript">
		$(document).ready(function(){
			$('#load-status')
				.html('Initializing ...')
				.fadeOut(3000);
			
			ServiceClient.Kernel.run([{
				service : ServiceClient.jquery.module.NavigatorInit,
				selector : 'form.navigate',
				event : 'submit',
				attribute : 'id'
			},{
				service : ServiceClient.jquery.module.NavigatorInit,
				selector : 'a.navigate',
				event : 'click',
				attribute : 'href'
			}]);
			
			ServiceClient.Registry.add('#htmlload', ServiceClient.jquery.navigator.HtmlLoad);
			ServiceClient.Registry.add('login', IITBHUCSE.jquery.navigator.Login);
		});
	</script>
	</body>
</html>