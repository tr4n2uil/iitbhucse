/**
 *	@template SpaceEdit
 *
**/
IITBHUCSE.jquery.template.SpaceEdit = $.template('\
<div id="space-entry-container">\
	<div id="space-entry-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Space Entry &lt; /${space.spname}${space.spvfpath}${space.spvfname} &gt; Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="core/space/read.php?vfile=${space.spname}${space.spvfpath}${space.spvfname}" target="_blank">Download</a></li>\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/space.php:arg=do~rem&spid~${space.spid}:cf=true" \
				class="navigate" >Remove</a></li>\
				<!--<li><a href="#tplload:cntr=#edit-panel:url=core/admin/space.php:arg=do~del&spid~${space.spid}:cf=true" \
				class="navigate" >Delete</a></li>-->\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="file-edit-panel" class="panel form-panel">\
		<form action="core/space/write.php" method="post" class="navigate" enctype="multipart/form-data" id="_upload:sel._file-edit-panel" target="upload_target" >\
			<fieldset >\
				<legend class="head">Change File at &lt; /${space.spname}${space.spvfpath}${space.spvfname} &gt;</legend>\
				<input type="hidden" name="spid" value="${space.spid}" />\
				<label>File type\
					<select name="stgmime">\
						<option value="application/pdf">Adobe PDF (.pdf)</option>\
						<option value="application/vnd.openxmlformats-officedocument.wordprocessingml.document">Microsoft Word Document (.docx)</option>\
						<option value="application/msword">Microsoft Word Document (.doc)</option>\
						<option value="image/png">PNG Image (.png)</option>\
						<option value="image/gif">GIF Image (.gif)</option>\
					</select>\
				</label>\
				<label>File\
					<input type="file" name="stgfile"/>\
				</label>\
				<input name="submit" type="submit" value="Submit"  class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
