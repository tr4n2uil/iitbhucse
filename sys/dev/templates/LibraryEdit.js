/**
 *	@template LibraryEdit
 *
**/
IITBHUCSE.jquery.template.LibraryEdit = $.template('\
<div id="admin-lib-panel">\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/library.php:arg=do~rem&bookid~${book.bookid}:cf=true" \
				class="navigate" >Remove</a></li>\
				<li><a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&bookid~${book.bookname}" \
				class="navigate" >Issue/Return</a></li>\
				<li><a href="#tplload:tpl=tpl-lib-cpy:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&bookid~${book.bookname}" \
				class="navigate" >Add Copy(ies)</a></li>\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="library-edit-container" class="panel form-panel">\
		<form action="core/admin/library.php" method="post" class="navigate" id="_formsubmit:sel._admin-lib-panel">\
			<fieldset >\
				<legend class="head">Edit Book #${book.bookid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="bookid" value="${book.bookid}"/>\
				<input type="hidden" name="bookname" value="${book.bookname}"/>\
				<label>Total Copies\
					<input type="text" name="total" value="${total}" disabled="disabled" size="3"/>\
				</label>\
				<label>Available copies\
					<input type="text" name="avail" value="${avail}" disabled="disabled" size="3"/>\
				</label>\
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
