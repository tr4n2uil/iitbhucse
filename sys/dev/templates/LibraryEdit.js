/**
 *	@template LibraryEdit
 *
**/
IITBHUCSE.jquery.template.LibraryEdit = $.template('\
<div id="admin-lib-panel">\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book #${book.isbn}</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/library.php:arg=do~rem&isbn~${book.isbn}:cf=true" \
				class="navigate" >Remove</a></li>\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 1)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&isbn~${book.isbn}" \
				class="navigate" >Issue</a></li>\
				{{/if}}\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 2)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~return&isbn~${book.isbn}" \
				class="navigate" >Return</a></li>\
				{{/if}}\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="library-edit-container" class="panel form-panel">\
		<form action="core/admin/library.php" method="post" class="navigate" id="_formsubmit:sel._admin-lib-panel">\
			<fieldset >\
				<legend class="head">Edit Book #${book.isbn}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="isbn" value="${book.isbn}"/>\
				<label>Book ID\
					<input type="text" name="bookid" value="${book.bookid}"/>\
				</label>\
				<label>Book Name\
					<input type="text" name="bookname" value="${book.bookname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Book Name</p>\
				<label>Author Name\
					<input type="text" name="bookauthor" value="${book.bookauthor}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Author Name</p>\
				<label>Book Description\
					<textarea name="bookdescription">${book.bookdescription}</textarea>\
				</label>\
				<label>Pages\
					<input type="text" name="bookpages" value="${book.bookpages}" />\
				</label>\
				<label>Book Collection\
					<input type="text" name="bookcollection" value="${book.bookcollection}" />\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
