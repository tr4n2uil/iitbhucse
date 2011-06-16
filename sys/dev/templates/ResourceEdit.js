/**
 *	@template ResourceEdit
 *
**/
IITBHUCSE.jquery.template.ResourceEdit = $.template('\
	<div id="admin-rsrc-panel">\
		<div id="resource-options-container" class="horizontal-menu"><fieldset>\
			<legend>Resource #${resource.rsrcid} Options</legend>\
			<ul>\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/resource.php:arg=do~rem&rsrcid~${resource.rsrcid}" \
				class="navigate" >Delete</a></li>\
			</ul>\
		</fieldset></div>\
		<div id="resource-edit-container" class="horizontal-menu form-panel">\
		<form action="core/admin/resource.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-rsrc-panel">\
			<fieldset >\
				<legend>Edit Resource #${resource.rsrcid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="rsrcid" value="${resource.rsrcid}"/>\
				<label>Name\
					<input type="text" name="rsrcname" value="${resource.rsrcname}" disabled="disabled"/>\
				</label>\
				<label>Content</label>\
				<textarea name="resource" rows="15">${resource.resource}</textarea>\
				<input name="submit" type="submit" value="Submit" />\
				<input name="reset" type="reset" value="Reset" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');

