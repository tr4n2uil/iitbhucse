/**
 *	@template ContentAll
 *
**/
IITBHUCSE.jquery.template.ContentAll = $.template('\
	<div id="content-container">\
		<div id="edit-panel"></div>\
		<div id="content-all-container" class="horizontal-menu"><fieldset>\
			<legend>All Contents</legend>\
			<ul>\
			<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-content-add.html" \
			class="navigate" >Create New ...</a></li>\
			{{each contents}}\
	<li><a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-cnt-edt:url=core/admin/content.php:arg=do~get&cntid~${$value.cntid}"\
		>${$value.cntname}</a></li>\
			{{/each}}\
			</ul>\
		</fieldset></div>\
	</div>');

