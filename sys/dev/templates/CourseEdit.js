/**
 *	@template CourseEdit
 *
**/
IITBHUCSE.jquery.template.CourseEdit = $.template('\
<div id="admin-crs-panel">\
	<div id="course-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Course #${course.crsid} Options</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#tplload:cntr=#edit-panel:url=core/admin/course.php:arg=do~rem&crsid~${course.crsid}:cf=true" \
						class="navigate" >Delete</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="course-edit-container" class="panel form-panel">\
		<form action="core/admin/course.php" method="post" class="navigate" id="_formsubmit:sel._admin-crs-panel">\
			<fieldset >\
				<legend class="head">Edit Course #${course.crsid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="crsid" value="${course.crsid}" />\
				<label>Course Name\
					<input type="text" name="crsname" value="${course.crsname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Course name</p>\
				<label>Course Description\
					<textarea name="crsdescription" rows="5" >${course.crsdescription}</textarea>\
				</label>\
				<label>Course Part\
					<select name="crspart" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(course.crspart, 1)}}selected="selected"{{/if}}>Part I</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(course.crspart, 2)}}selected="selected"{{/if}}>Part II</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(course.crspart, 3)}}selected="selected"{{/if}}>Part III</option>\
						<option value="4" {{if ServiceClient.jquery.helper.equals(course.crspart, 4)}}selected="selected"{{/if}}>Part IV</option>\
						<option value="5" {{if ServiceClient.jquery.helper.equals(course.crspart, 5)}}selected="selected"{{/if}}>Part V</option>\
					</select>\
				</label><input name="submit" type="submit" value="Submit" class="margin5" />\
				<input name="reset" type="reset" value="Reset" class="margin5" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
