/**
 *	@template StudentEdit
 *
**/
IITBHUCSE.jquery.template.StudentEdit = $.template('\
<div id="admin-std-panel">\
	<div id="file-panel"></div>\
	<div id="student-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">{{if admin}}Student #${student.stuid}{{else}}Profile{{/if}} Options</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/student.php:arg=do~rem&stuid~${student.stuid}:cf=true" \
				class="navigate" >Delete</a></li>\
				{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${student.stresume}" class="navigate" >Resume</a>\
				</li>\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${student.stphoto}" class="navigate" >Photo</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="student-edit-container" class="panel form-panel">\
		<form action="core/admin/student.php" method="post" class="navigate" id="_formsubmit:sel._admin-std-panel">\
			<fieldset >\
				<legend class="head">{{if admin}}Edit Student #${student.stuid}{{else}}Edit Profile{{/if}}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="stuid" value="${student.stuid}"/>\
				<label>Email\
					<input type="text" name="stemail" value="${student.stemail}" disabled="disabled" size="50"/>\
				</label>\
				{{if admin}}\
				<label>Name\
					<input type="text" name="stname" value="${student.stname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Name</p>\
				<label>Roll Number\
					<input type="text" name="strollno" value="${student.strollno}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid username</p>\
				<label>Course\
					<select name="stcourse" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.stcourse, 1)}}selected="selected"{{/if}}>B.Tech</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.stcourse, 2)}}selected="selected"{{/if}}>M.Tech</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(student.stcourse, 3)}}selected="selected"{{/if}}>Ph.D</option>\
					</select>\
				</label>\
				<label>Year\
					<input type="text" name="styear" value="${student.styear}" />\
				</label>\
				<label>Status\
					<select name="ststatus" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.ststatus, 1)}}selected="selected"{{/if}}>Enrolled</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.ststatus, 2)}}selected="selected"{{/if}}>Alumnus</option>\
					</select>\
				</label>\
				<label>Internship\
					<input type="text" name="stinternship" value="${student.stinternship}" />\
				</label>\
				<label>Placement\
					<input type="text" name="stplacement" value="${student.stplacement}" />\
				</label>\
				{{/if}}\
				<label>CGPA\
					<input type="text" name="stcgpa" value="${student.stcgpa}"/>\
				</label>\
				<label>Interests\
					<textarea name="stinterest" rows="5">${student.stinterest}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
