<?php 

	require_once('init.php');
	require_once(INITROOT . 'sys/lib/Document.class.php');
	
	$model['title'] = "Department of Computer Engineering IT BHU";
	$model['styles'] = array('default.css', 'layout.css', 'jquery.css', 'iitbhucse-styles.css', 'redmond/jquery-ui-1.8.13.custom.css');
	Document::header($model);
	
	include(INITROOT. 'ui/html/main-header.html');
	include(INITROOT. 'ui/html/main-menu.html');
?>
		<div id="quick-panel">
			<?php 
				if($model['valid'] && isset($model['uid'])){
					include(INITROOT. 'ui/html/quick-account.html');
					
					$op = $cl->load("student.info", ICROOT);
					$model['stuid'] = $model['uid'];
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-student.html');
					}
					
					$op = $cl->load("faculty.info", ICROOT);
					$model['fid'] = $model['uid'];
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-faculty.html');
					}
					
					$op = $cl->load("privilege.check", ECROOT);
					$model['privtype'] = 'ENHANCSE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-admin.html');
					}
					
					$model['privtype'] = 'STUDENT_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-student-admin.html');
					}
					
					$model['privtype'] = 'FACULTY_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-faculty-admin.html');
					}
					
					$model['privtype'] = 'EMAGAZINE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-emagazine-admin.html');
					}
					
					$model['privtype'] = 'LIBRARY_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-library-admin.html');
					}
					
					$model['privtype'] = 'COURSE_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-course-admin.html');
					}
					
					$model['privtype'] = 'NEWS_ADMIN';
					$model = $kernel->run($op, $model);
					if($model['valid']){
						include(INITROOT. 'ui/html/quick-news-admin.html');
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
			ServiceClient.Registry.save('tpl-usr-all', IITBHUCSE.jquery.template.UserAll);
			ServiceClient.Registry.save('tpl-usr-edt', IITBHUCSE.jquery.template.UserEdit);
			ServiceClient.Registry.save('tpl-prv-all', IITBHUCSE.jquery.template.PrivilegeAll);
			ServiceClient.Registry.save('tpl-prv-edt', IITBHUCSE.jquery.template.PrivilegeEdit);
			ServiceClient.Registry.save('tpl-spc-all', IITBHUCSE.jquery.template.SpaceAll);
			ServiceClient.Registry.save('tpl-spe-all', IITBHUCSE.jquery.template.SpaceEntryAll);
			ServiceClient.Registry.save('tpl-spc-edt', IITBHUCSE.jquery.template.SpaceEdit);
			ServiceClient.Registry.save('tpl-rsrc-all', IITBHUCSE.jquery.template.ResourceAll);
			ServiceClient.Registry.save('tpl-rsrc-edt', IITBHUCSE.jquery.template.ResourceEdit);
			ServiceClient.Registry.save('tpl-cnt-all', IITBHUCSE.jquery.template.ContentAll);
			ServiceClient.Registry.save('tpl-cnt-edt', IITBHUCSE.jquery.template.ContentEdit);
			
			ServiceClient.Registry.save('tpl-fac-all', IITBHUCSE.jquery.template.FacultyAll);
			ServiceClient.Registry.save('tpl-fac-edt', IITBHUCSE.jquery.template.FacultyEdit);
			ServiceClient.Registry.save('tpl-crs-all', IITBHUCSE.jquery.template.CourseAll);
			ServiceClient.Registry.save('tpl-crs-edt', IITBHUCSE.jquery.template.CourseEdit);
			ServiceClient.Registry.save('tpl-std-all', IITBHUCSE.jquery.template.StudentAll);
			ServiceClient.Registry.save('tpl-std-edt', IITBHUCSE.jquery.template.StudentEdit);
			ServiceClient.Registry.save('tpl-lib-all', IITBHUCSE.jquery.template.LibraryAll);
			ServiceClient.Registry.save('tpl-lib-edt', IITBHUCSE.jquery.template.LibraryEdit);
			ServiceClient.Registry.save('tpl-lib-trs', IITBHUCSE.jquery.template.LibraryTransaction);
			ServiceClient.Registry.save('tpl-elb-edt', IITBHUCSE.jquery.template.ElibraryEdit);
			ServiceClient.Registry.save('tpl-elb-all', IITBHUCSE.jquery.template.ElibraryAll);
			ServiceClient.Registry.save('tpl-nws-all', IITBHUCSE.jquery.template.NewsAll);
			ServiceClient.Registry.save('tpl-nws-edt', IITBHUCSE.jquery.template.NewsEdit);

			ServiceClient.Registry.save('tpl-std-bws', IITBHUCSE.jquery.template.StudentBrowse);
			ServiceClient.Registry.save('tpl-std-vw', IITBHUCSE.jquery.template.StudentView);
			ServiceClient.Registry.save('tpl-fac-vw', IITBHUCSE.jquery.template.FacultyView);
			ServiceClient.Registry.save('tpl-crs-bws', IITBHUCSE.jquery.template.CourseBrowse);
			ServiceClient.Registry.save('tpl-crs-vw', IITBHUCSE.jquery.template.CourseView);
			ServiceClient.Registry.save('tpl-elb-bws', IITBHUCSE.jquery.template.ElibraryBrowse);
			ServiceClient.Registry.save('tpl-elb-vw', IITBHUCSE.jquery.template.ElibraryView);
			ServiceClient.Registry.save('tpl-lib-bws', IITBHUCSE.jquery.template.LibraryBrowse);
			ServiceClient.Registry.save('tpl-lib-vw', IITBHUCSE.jquery.template.LibraryView);

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