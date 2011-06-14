/**
 *	@template ContentEdit
 *
**/
IITBHUCSE.jquery.template.ContentEdit = $.template('\
	<div id="admin-cnt-panel" >\
		<div id="content-options-container" class="horizontal-menu"><fieldset>\
			<legend>Content #${content.cntid} Options</legend>\
			<ul>\
				<li><a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${content.cntid}" \
				class="navigate" >View</a></li>\
				{{if admin}}<li>\
				<a href="#tplload:cntr=#edit-panel:url=core/admin/content.php:arg=do~rem&cntid~${content.cntid}" \
				class="navigate" >Delete</a></li>{{/if}}\
			</ul>\
		</fieldset></div>\
		<div id="content-edit-container" class="horizontal-menu form-panel">\
		<form action="core/admin/content.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-cnt-panel">\
			<fieldset >\
				<legend>Edit Content #${content.cntid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="cntid" value="${content.cntid}"/>\
				<label>Name\
					<input type="text" name="cntname" value="${content.cntname}" disabled="disabled"/>\
				</label>\
				<label>Style Type\
					<select name="cntstype" {{if admin}} {{else}}disabled="disabled"{{/if}}>\
						<option value="1" {{if IITBHUCSE.jquery.helper.equals(content.cntstype, 1)}}selected="selected"{{/if}}>Inline</option>\
						<option value="2" {{if IITBHUCSE.jquery.helper.equals(content.cntstype, 2)}}selected="selected"{{/if}}>Resource</option>\
						<option value="3" {{if IITBHUCSE.jquery.helper.equals(content.cntstype, 3)}}selected="selected"{{/if}}>File</option>\
					</select>\
				</label>\
				<label>Style</label>\
				<textarea name="cntstyle" rows="15">${content.cntstyle}</textarea>\
				<label>Template Type\
					<select name="cntttype" {{if admin}} {{else}}disabled="disabled"{{/if}}>\
						<option value="1" {{if IITBHUCSE.jquery.helper.equals(content.cntttype, 1)}}selected="selected"{{/if}}>Inline</option>\
						<option value="2" {{if IITBHUCSE.jquery.helper.equals(content.cntttype, 2)}}selected="selected"{{/if}}>Resource</option>\
						<option value="3" {{if IITBHUCSE.jquery.helper.equals(content.cntttype, 3)}}selected="selected"{{/if}}>File</option>\
					</select>\
				</label>\
				<label>Template</label>\
				<textarea name="cnttpl" rows="15" >${content.cnttpl}</textarea>\
				<label>Data Type\
					<select name="cntdtype" {{if admin}} {{else}}disabled="disabled"{{/if}}>\
						<option value="1" {{if IITBHUCSE.jquery.helper.equals(content.cntdtype, 1)}}selected="selected"{{/if}}>Inline</option>\
						<option value="2" {{if IITBHUCSE.jquery.helper.equals(content.cntdtype, 2)}}selected="selected"{{/if}}>Resource</option>\
						<option value="3" {{if IITBHUCSE.jquery.helper.equals(content.cntdtype, 3)}}selected="selected"{{/if}}>File</option>\
						<option value="4" {{if IITBHUCSE.jquery.helper.equals(content.cntdtype, 4)}}selected="selected"{{/if}}>Query</option>\
					</select>\
				</label>\
				<label>Data</label>\
				<textarea name="cntdata" rows="15">${content.cntdata}</textarea>\
				<input name="submit" type="submit" value="Submit" />\
				<input name="reset" type="reset" value="Reset" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');

IITBHUCSE.jquery.helper.equals = function(value1, value2){
	return value1==value2;
}