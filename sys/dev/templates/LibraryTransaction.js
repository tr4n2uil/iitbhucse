/**
 *	@template LibraryTransaction
 *
**/
IITBHUCSE.jquery.template.LibraryTransaction = $.template('\
<div id="admin-lib-panel">\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/library.php:arg=do~rem&bookid~${book.bookid}:cf=true" \
				class="navigate" >Remove</a></li>\
				<li><a href="#tplload:tpl=tpl-lib-isu:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&bookid~${book.bookid}" \
				class="navigate" >Issue/Return</a></li>\
				<li><a href="#tplload:tpl=tpl-lib-cpy:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&bookid~${book.bookid}" \
				class="navigate" >Add Copy(ies)</a></li>\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="library-edit-container" class="panel form-panel">\
		<form action="core/admin/library.php" method="post" class="navigate" id="_formsubmit:sel._admin-lib-panel">\
			<fieldset >\
				<legend class="head">${book.bookname}</legend>\
				<input type="hidden" name="bookname" value="${book.bookname}"/>\
				<label>\
					<select name="do">\
						<option value="issue">Issue</option>\
						<option value="return">Return</option>\
					</select>\
				</label>\
				<label>User ID\
					<input type="text" name="issuedto" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid User ID</p>\
				<input name="submit" type="submit" value="Issue" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');

