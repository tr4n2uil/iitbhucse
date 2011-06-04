<?php 

	require_once('init.php');
	require_once(INITROOT . 'sys/lib/Document.class.php');
	
	$model['title'] = "Department of Computer Engineering IT BHU";
	$model['styles'] = array('default.css', 'jquery.css', 'iitbhucse.css');
	Document::header($model);
	
	echo <<<HOME
		<p id="load-status"></p>
		
		<div id="header" >
			<p class="large">Department of Computer Engineering</p>
			<p>Institute of technology</p>
			<p>Banaras Hindu University, Varanasi</p>
		</div>
		
		<div id="menu-container">
			<ul>
				<li>Home</li>
				<li>Faculty</li>
				<li>Courses</li>
				<li>Students</li>
				<li>Activities</li>
				<li>Placements</li>
				<li>About</li>
			</ul>
		</div>
		
		<div id="quick-panel">
			<p>Quick Links</p>
		</div>
		
		<div id="main-container">
			<p>Welcome to Department of Computer Science</p>
		</div>
		
HOME;

		$model = array();
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