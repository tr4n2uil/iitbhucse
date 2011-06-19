/**
 *	@template UserEdit
 *
**/
IITBHUCSE.jquery.template.UserEdit = $.template('\
<div id="admin-usr-panel">\
	<div id="user-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">User #${user.uid} Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/user.php:arg=do~rem&uid~${user.uid}:cf=true" \
				class="navigate" >Delete</a></li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="user-edit-container" class="panel form-panel">\
		<form action="core/admin/user.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-usr-panel">\
			<fieldset >\
				<legend class="head">Edit User #${user.uid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="uid" value="${user.uid}"/>\
				<label>Email\
					<input type="text" name="email" value="${user.email}" disabled="disabled"/>\
				</label>\
				<label>Username\
					<input type="text" name="newusername" value="${user.username}"/>\
				</label>\
				<label>Password\
					<input type="password" name="newpassword" value=""/>\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
