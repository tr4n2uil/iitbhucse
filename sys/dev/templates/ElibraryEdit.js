/**
 *	@template ElibraryEdit
 *
**/
IITBHUCSE.jquery.template.ElibraryEdit = $.template('\
<div id="admin-elib-panel">\
	<div id="file-panel"></div>\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book #${ebook.bookid}</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/elibrary.php:arg=do~rem&bookid~${ebook.bookid}:cf=true" \
				class="navigate" >Remove</a></li>{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${ebook.bookid}" class="navigate" >Upload</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="elibrary-edit-container" class="panel form-panel">\
		<form action="core/admin/elibrary.php" method="post" class="navigate" id="_formsubmit:sel._admin-elib-panel">\
			<fieldset >\
				<legend class="head">Edit Book #${ebook.bookid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="bookid" value="${ebook.bookid}"/>\
				<label>Book Name\
					<input type="text" name="bookname" value="${ebook.bookname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Book Name</p>\
				<label>Author Name\
					<input type="text" name="bookauthor" value="${ebook.bookauthor}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Author Name</p>\
				<label>Book Description\
					<textarea name="bookdescription">${ebook.bookdescription}</textarea>\
				</label>\
				<label>Pages\
					<input type="text" name="bookpages" value="${ebook.bookpages}" />\
				</label>\
				<label>Book Collection\
					<input type="text" name="bookcollection" value="${ebook.bookcollection}" />\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
