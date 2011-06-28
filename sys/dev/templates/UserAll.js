/**
 *	@template UserAll
 *
**/
IITBHUCSE.jquery.template.UserAll = $.template('\
<div id="user-container">\
	<div id="edit-panel"></div>\
	<div id="user-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Users</legend>\
			<ul class="horizontal menu">\
				<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-user-add.html" \
						class="navigate" >Create New ...</a></li>\
				{{each users}}\
				<li>\
					<a class="navigate" \
					href="#tplload:cntr=#edit-panel:tpl=tpl-usr-edt:url=core/admin/user.php:arg=do~get&uid~${$value.uid}"\
					>${$value.username}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
