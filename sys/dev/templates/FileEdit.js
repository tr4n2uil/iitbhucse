/**
 *	@template FileEdit
 *
**/
IITBHUCSE.jquery.template.FileEdit = $.template('\
<div id="file-edit-panel" class="panel form-panel">\
	<form action="core/space/write.php" method="post" class="navigate" enctype="multipart/form-data" \
		id="_upload:sel._file-edit-panel" target="upload_target" >\
		<fieldset >\
			<legend class="head">Change ${typename}</legend>\
			<input type="hidden" name="spid" value="${space.spid}" />\
			<label>File type\
				<select name="stgmime">\
					<option value="application/pdf">Adobe PDF</option>\
					<option value="image/png">PNG Image</option>\
					<option value="image/gif">GIF Image</option>\
				</select>\
			</label>\
			<label>${typename}\
				<input type="file" name="stgfile"/>\
			</label>\
			<input name="submit" type="submit" value="Submit"  class="margin5"/>\
			<div class="status"></div>\
		</fieldset>\
	</form>\
</div>');
