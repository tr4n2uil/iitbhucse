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
					include(INITROOT. 'ui/html/account.html');
					
					$op = $cl->load("privilege.check", ECROOT);
					$model['privtype'] = 'ENHANCSE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/enhancse-admin.html');
					}
					
					$model['privtype'] = 'FACULTY_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/faculty-admin.html');
					}
					
					$model['privtype'] = 'EMAGAZINE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/emagazine-admin.html');
					}
					
					$model['privtype'] = 'LIBRARY_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/library-admin.html');
					}
					
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
			
			ServiceClient.Kernel.run([{
				service : ServiceClient.jquery.module.Status,
				selector : '#load-status',
				value : 'Initializing ...',
				hide : 3000
			},{
				service : ServiceClient.jquery.module.NavigatorInit,
				selector : 'a.navigate',
				event : 'click',
				attribute : 'href'
			},{
				service : ServiceClient.jquery.module.NavigatorInit,
				selector : 'form.navigate',
				event : 'submit',
				attribute : 'title'
			}]);
			
			ServiceClient.Registry.add('#htmlload', ServiceClient.jquery.navigator.HtmlLoad);
			ServiceClient.Registry.add('#tplload', ServiceClient.jquery.navigator.TplLoad);
			ServiceClient.Registry.add('#submitload', ServiceClient.jquery.navigator.SubmitLoad);
			ServiceClient.Registry.add('#upload', ServiceClient.jquery.navigator.Upload);
			
			ServiceClient.Registry.save('mdl-login', IITBHUCSE.jquery.module.Login);
		});
	</script>
	</body>
</html>