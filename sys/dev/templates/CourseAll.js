/**
 *	@template CourseAll
 *
**/
IITBHUCSE.jquery.template.CourseAll = $.template('\
<div id="course-container">\
	<div id="edit-panel"></div>\
	<div id="course-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Courses</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-course-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each courses}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-crs-edt:url=core/admin/course.php:arg=do~get&crsid~${$value.crsid}"\
					>${$value.crsid}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');

