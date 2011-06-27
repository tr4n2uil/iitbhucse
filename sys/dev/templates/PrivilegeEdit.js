/**
 *	@template PrivilegeEdit
 *
**/
IITBHUCSE.jquery.template.PrivilegeEdit = $.template('\
<div id="admin-prv-panel">\
	<!--<div id="privilege-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Privilege ${type} Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/privilege.php:arg=do~remove&type~${type}:cf=true" \
				class="navigate" >Remove</a></li>\
			</ul>\
		</fieldset>\
	</div>-->\
	<div id="privilege-edit-container" class="panel left">\
			<fieldset >\
				<legend class="head">Users with ${type} privilege</legend>\
				<ul class="vertical menu">\
					<p class="desc">Click on user to revoke privilege</p>\
					{{each privileges}}\
					<li>\
						<a href="#tplload:cntr=#edit-panel:url=core/admin/privilege.php:arg=do~rvk&type~${$value.type}&uid~${$value.uid}:cf=true" class="navigate" >${$value.username}</a>\
					</li>\
					{{/each}}\
			</ul>\
			</fieldset>\
		</form>\
	</div>\
</div>');
