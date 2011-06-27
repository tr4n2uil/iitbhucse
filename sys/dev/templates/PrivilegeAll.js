/**
 *	@template PrivilegeAll
 *
**/
IITBHUCSE.jquery.template.PrivilegeAll = $.template('\
<div id="privilege-container">\
	<div id="edit-panel"></div>\
	<div id="privilege-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Privileges</legend>\
			<ul class="vertical menu">\
				<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-privilege-grant.html" \
						class="navigate" >Grant ...</a></li>\
				{{each privileges}}\
				<li>\
					<a class="navigate" href="#tplload:cntr=#edit-panel:tpl=tpl-prv-edt:url=core/admin/privilege.php:arg=do~get&type~${$value.type}">${$value.type}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
