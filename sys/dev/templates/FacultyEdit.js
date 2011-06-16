/**
 *	@template FacultyEdit
 *
**/
IITBHUCSE.jquery.template.FacultyEdit = $.template('\
	<div id="admin-fac-panel">\
		<div id="faculty-options-container" class="horizontal-menu"><fieldset>\
			<legend>Faculty #${faculty.fid} Options</legend>\
			<ul>\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/faculty.php:arg=do~rem&fid~${faculty.fid}" \
				class="navigate" >Delete</a></li>\
			</ul>\
		</fieldset></div>\
		<div id="faculty-edit-container" class="horizontal-menu form-panel">\
		<form action="core/admin/faculty.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-fac-panel">\
			<fieldset >\
				<legend>Edit Faculty #${faculty.fid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="fid" value="${faculty.fid}"/>\
				<label>Email\
					<input type="text" name="femail" value="${faculty.femail}" disabled="disabled"/>\
				</label>\
				<label>Name\
					<input type="text" name="newfname" value="${faculty.fname}"/>\
				</label>\
				Designation\
				<label>	<input type="radio" name="newfdesignation" class="field" value="1">Professor</label>\
				<label>	<input type="radio" name="newfdesignation" class="field" value="2">Assist. Professor</label>\
				<label>	<input type="radio" name="newfdesignation" class="field" value="3">Reader</label>\
				<label>	<input type="radio" name="newfdesignation" class="field" value="4">Lecturer</label>\
				<label>Qualification\
					<input type="text" name="newfqualification" class="field" value="${faculty.fqualification}"/>\
				</label>\
				<label>Phone No\
					<input type="text" name="newfphone" class="field" value="${faculty.fphone}" />\
				</label>\
				<label>Interests\
					<textarea name="newfinterest" class="field" value="${faculty.finterests}" ></textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" />\
				<input name="reset" type="reset" value="Reset" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');

