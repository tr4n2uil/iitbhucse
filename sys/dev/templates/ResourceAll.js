/**
 *	@template ResourceAll
 *
**/
IITBHUCSE.jquery.template.ResourceAll = $.template('\
	<div id="resource-container">\
		<div id="edit-panel"></div>\
		<div id="resource-all-container" class="horizontal-menu"><fieldset>\
			<legend>All Resources</legend>\
			<ul>\
			<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-resource-add.html" \
			class="navigate" >Create New ...</a></li>\
			{{each resources}}\
	<li><a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-rsrc-edt:url=core/admin/resource.php:arg=do~get&rsrcid~${$value.rsrcid}"\
		>${$value.rsrcname}</a></li>\
			{{/each}}\
			</ul>\
		</fieldset></div>\
	</div>');

