/**
 *	@template CourseBrowse
 *
**/
IITBHUCSE.jquery.template.CourseBrowse = $.template('\
<div id="course-container">\
	<div id="grid-panel"></div>\
	<div id="course-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Courses by Part</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" href="#tplload:cntr=#grid-panel:tpl=tpl-crs-vw:url=core/course/course-all.php:arg=allparts~true"\>\
					All...</a>\
				</li>\
				{{each courses}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-crs-vw:url=core/course/course-all.php:arg=crspart~${crspart}"\
					>${IITBHUCSE.jquery.helper.getPart(crspart)}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');

