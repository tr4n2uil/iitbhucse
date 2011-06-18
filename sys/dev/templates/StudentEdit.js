/**
 *	@template StudentEdit
 *
**/
IITBHUCSE.jquery.template.StudentEdit = $.template('\
	<div id="admin-stu-panel">\
		<div id="student-options-container" class="horizontal-menu"><fieldset>\
			<legend>Student #${student.stuid} Options</legend>\
			<ul>\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/student.php:arg=do~rem&stuid~${student.stuid}" \
				class="navigate" >Delete</a></li>\
			</ul>\
		</fieldset></div>\
		<div id="student-edit-container" class="horizontal-menu form-panel">\
		<form action="core/admin/student.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-stu-panel">\
			<fieldset >\
				<legend>Edit Student #${student.stuid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="stuid" value="${student.stuid}"/>\
				<label>Email\
					<input type="text" name="stemail" value="${student.stemail}" disabled="disabled"/>\
				</label>\
				<label>Name\
					<input type="text" name="stname" value="${student.stname}"/>\
				</label>\
				<label>Roll Number\
					<input type="text" name="strollno" value="${student.strollno}"/>\
				</label>\
				<label>Course\
				<select name="stcourse" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.stcourse, 1)}}selected="selected"{{/if}}>B.Tech</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.stcourse, 2)}}selected="selected"{{/if}}>M.Tech</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(student.stcourse, 3)}}selected="selected"{{/if}}>Ph.D</option>\
					</select>\
				</label>\
				<label>Year\
					<input type="text" name="styear" class="field" value="${student.styear}"/>\
				</label>\
				<label>Status\
					<select name="ststatus">\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.ststatus, 1)}}selected="selected"{{/if}}>Enrolled</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.ststatus, 2)}}selected="selected"{{/if}}>Alumnus</option>\
					</select>\
				</label>\
				<label>CGPA\
					<input type="text" name="stcgpa" class="field" value="${student.stcgpa}"/>\
				</label>\
				<label>Internship\
					<input type="text" name="stinternship" class="field" value="${student.stinternship}"/>\
				</label>\
				<label>Placement\
					<input type="text" name="stplacement" class="field" value="${student.stplacement}"/>\
				</label>\
				<label>Interests\
					<textarea name="stinterest" class="field">${student.stinterest}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" />\
				<input name="reset" type="reset" value="Reset" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');

