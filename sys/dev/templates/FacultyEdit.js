/**
 *	@template FacultyEdit
 *
**/
IITBHUCSE.jquery.template.FacultyEdit = $.template('\
<div id="admin-fac-panel">\
	<div id="file-panel"></div>\
	<div id="faculty-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Faculty #${faculty.fid} Options</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li>\
					<a href="#tplload:cntr=#edit-panel:url=core/admin/faculty.php:arg=do~rem&fid~${faculty.fid}:cf=true" \
						class="navigate" >Delete</a>\
				</li>\
				{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${faculty.fresume}" class="navigate" >Resume</a>\
				</li>\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${faculty.fphoto}" class="navigate" >Photo</a>\
				</li>\
				<li><a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${faculty.fhome}" class="navigate" >Home Page</a>\</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="faculty-edit-container" class="panel form-panel">\
		<form action="core/admin/faculty.php" method="post" class="navigate" id="_formsubmit:sel._admin-fac-panel">\
			<fieldset >\
				<legend class="head">Edit Faculty #${faculty.fid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="fid" value="${faculty.fid}"/>\
				<label>Email\
					<input type="text" name="femail" value="${faculty.femail}" disabled="disabled"/>\
				</label>\
				{{if admin}}\
				<label>Name\
					<input type="text" name="fname" value="${faculty.fname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Name</p>\
				<label>Designation\
				<select name="fdesignation" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 1)}}selected="selected"{{/if}}>Professor</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 2)}}selected="selected"{{/if}}>Assist. Professor</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 3)}}selected="selected"{{/if}}>Reader</option>\
						<option value="4" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 4)}}selected="selected"{{/if}}>Lecturer</option>\
					</select>\
				</label>\
				<label>Qualification\
					<input type="text" name="fqualification" value="${faculty.fqualification}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Qualification</p>\
				<label>Status\
				<select name="fstatus">\
				<option value="1" {{if ServiceClient.jquery.helper.equals(faculty.fstatus, 1)}}selected="selected"{{/if}}>Teaching</option>\
				<option value="2" {{if ServiceClient.jquery.helper.equals(faculty.fstatus, 2)}}selected="selected"{{/if}}>Retired</option>\
				</select>\
				</label>\
				{{/if}}\
				<label>Phone No\
					<input type="text" name="fphone" value="${faculty.fphone}" />\
				</label>\
				<label>Interests\
					<textarea name="finterest" rows="5" >${faculty.finterest}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
