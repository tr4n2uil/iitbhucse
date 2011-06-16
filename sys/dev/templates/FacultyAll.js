/**
 *	@template FacultyAll
 *
**/
IITBHUCSE.jquery.template.FacultyAll = $.template('\
	<div id="faculty-container">\
		<div id="edit-panel"></div>\
		<div id="faculty-all-container" class="horizontal-menu"><fieldset>\
			<legend>All Faculty Members</legend>\
			<ul>\
			<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-faculty-add.html" \
			class="navigate" >Create New ...</a></li>\
			{{each faculty}}\
	<li><a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-fac-edt:url=core/admin/faculty.php:arg=do~get&fid~${$value.fid}"\
		>${$value.fname}</a></li>\
			{{/each}}\
			</ul>\
		</fieldset></div>\
	</div>');

