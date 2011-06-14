/**
 *	@template Students
 *
**/
IITBHUCSE.jquery.template.StudentBrowse = $.template('\
	<div id="student-container">\
		<div id="grid-panel"></div>\
		<div id="student-menu-container" class="horizontal-menu"><fieldset>\
			<legend>All Students by Enrollment year</legend>\
			{{each allyear}}\
			<ul>\
	<li><a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-vw:url=core/student/student-all.php:arg=styear~${styear}&stcourse~1"\
		>B Tech ${styear}</a></li>\
		<li><a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-vw:url=core/student/student-all.php:arg=styear~${styear}&stcourse~2"\
		>IDD ${styear}</a></li>\
		<li><a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-vw:url=core/student/student-all.php:arg=styear~${styear}&stcourse~3"\
		>PhD ${styear}</a></li>\
		</ul>\
			{{/each}}\
			</fieldset>\
		</div>\
		<div id="edit-panel"></div>\
	</div>');

