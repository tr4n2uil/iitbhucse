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
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/library.php:arg=do~rem&isbn~${book.isbn}:cf=true" \
				class="navigate" >Remove</a></li>\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 1)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&isbn~${book.isbn}" \
				class="navigate" >Issue</a>{{/if}}</li>\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 2)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~return&isbn~${book.isbn}" \
				class="navigate" >Return</a>{{/if}}</li>\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="library-edit-container" class="panel form-panel">\
		<form action="core/admin/library.php" method="post" class="navigate" id="_formsubmit:sel._admin-lib-panel">\
			<fieldset >\
				<legend class="head">Issue ${book.isbn}</legend>\
				<input type="hidden" name="do" value="issue"/>\
				<input type="hidden" name="isbn" value="${book.isbn}"/>\
				<input type="text" name="bookname" value="${book.bookname}" disabled="disabled"/>\
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

