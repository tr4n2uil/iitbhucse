/**
 *	@template StudentAll
 *
**/
IITBHUCSE.jquery.template.StudentAll = $.template('\
	<div id="student-container">\
		<div id="edit-panel"></div>\
		<div id="student-all-container" class="horizontal-menu"><fieldset>\
			<legend>All Students</legend>\
			<ul>\
			<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-student-add.html" \
			class="navigate" >Create New ...</a></li>\
			{{each students}}\
	<li><a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-std-edt:url=core/admin/student.php:arg=do~get&stuid~${$value.stuid}"\
		>${$value.strollno}\\${$value.stname}</a></li>\
			{{/each}}\
			</ul>\
		</fieldset></div>\
	</div>');

