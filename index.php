<?php 

	require_once('init.php');
	require_once(INITROOT . 'sys/lib/Document.class.php');
	
	$model['title'] = "Department of Computer Engineering IT BHU";
	$model['styles'] = array('default.css', 'jquery.css', 'iitbhucse-styles.css', 'redmond/jquery-ui-1.8.13.custom.css');
	Document::header($model);
	
	include(INITROOT. 'ui/html/main-header.html');
	include(INITROOT. 'ui/html/main-menu.html');
?>
		<div id="quick-panel">
			<?php 
				if($model['valid'] && isset($model['uid'])){
					include(INITROOT. 'ui/html/quick-account.html');
					
					$op = $cl->load("privilege.check", ECROOT);
					$model['privtype'] = 'ENHANCSE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-admin.html');
					}
					
					$model['privtype'] = 'FACULTY_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-faculty.html');
					}
					
					$model['privtype'] = 'EMAGAZINE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-emagazine.html');
					}
					
					$model['privtype'] = 'LIBRARY_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-library.html');
					}
					
				}
				else {
					include(INITROOT. 'ui/html/quick-login.html');
				}
			?>
		</div>
		
		<div id="main-container">
			<?php include(INITROOT. 'ui/html/main-home.html'); ?>
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
			
			ServiceClient.Registry.add('#htmlload', ServiceClient.jquery.navigator.HtmlLoad);
			ServiceClient.Registry.add('#tplload', ServiceClient.jquery.navigator.TplLoad);
			ServiceClient.Registry.add('#formsubmit', ServiceClient.jquery.navigator.FormSubmit);
			ServiceClient.Registry.add('#upload', ServiceClient.jquery.navigator.Upload);
			
			ServiceClient.Registry.save('mdl-login', ServiceClient.jquery.module.CookieLogin);
			
			ServiceClient.Registry.save('tpl-test', ServiceClient.jquery.template.Test);
			ServiceClient.Registry.save('tpl-rsrc-all', IITBHUCSE.jquery.template.ResourceAll);
			ServiceClient.Registry.save('tpl-rsrc-edt', IITBHUCSE.jquery.template.ResourceEdit);
			ServiceClient.Registry.save('tpl-cnt-all', IITBHUCSE.jquery.template.ContentAll);
			ServiceClient.Registry.save('tpl-cnt-edt', IITBHUCSE.jquery.template.ContentEdit);
			ServiceClient.Registry.save('tpl-usr-all', IITBHUCSE.jquery.template.UserAll);
			ServiceClient.Registry.save('tpl-usr-edt', IITBHUCSE.jquery.template.UserEdit);
			
			ServiceClient.Registry.save('tpl-std-bws', IITBHUCSE.jquery.template.StudentBrowse);
			ServiceClient.Registry.save('tpl-std-vw', IITBHUCSE.jquery.template.StudentView);
			
			ServiceClient.Kernel.run([{
				service : ServiceClient.jquery.module.AlertStatus,
				selector : '#load-status',
				value : 'Initializing ...',
			},{
				service : ServiceClient.jquery.module.NavigatorInit,
				selector : 'a.navigate',
				event : 'click',
				attribute : 'href'
			},{
				service : ServiceClient.jquery.module.NavigatorInit,
				selector : 'form.navigate',
				event : 'submit',
				attribute : 'id',
				escaped : true
			},{
				service : ServiceClient.jquery.module.AlertStatus,
				selector : '#load-status',
				value : 'Initializing ...',
				hide : 1000,
				delay : 1000
			}]);
			
		});
	</script>
	</body>
</html>