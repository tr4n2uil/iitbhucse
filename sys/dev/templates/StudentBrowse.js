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
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-all:url=core/student/student-all.php:arg=styear~${styear}"\
		>${styear}</a></li>\
			{{/each}}\
			</ul>\
		</div>\
		<div id="edit-panel"></div>\
		<div id="grid-panel"></div>\
	</div>');

