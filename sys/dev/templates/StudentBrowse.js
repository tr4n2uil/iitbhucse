/**
 *	@template Students
 *
**/
IITBHUCSE.jquery.template.StudentBrowse = $.template('\
	<div id="student-container">\
		<div id="student-menu-container" class="horizontal-menu">\
			<ul>\
			{{each allyear}}\
	<li><a class="navigate" \
	href="#tplload:container=#grid-panel:tpl=tpl-std-all:loadurl=core/student/student-all.php:param=styear~${styear}"\
		>${styear}</a></li>\
			{{/each}}\
			</ul>\
		</div>\
		<div id="edit-panel"></div>\
		<div id="grid-panel"></div>\
	</div>');

