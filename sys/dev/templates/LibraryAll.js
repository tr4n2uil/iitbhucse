/**
 *	@template LibraryAll
 *
**/
IITBHUCSE.jquery.template.LibraryAll = $.template('\
<div id="library-container">\
	<div id="edit-panel"></div>\
	<div id="library-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Books</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-library-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each books}}\
				<li>\
					<a class="navigate" \
			href="#tplload:cntr=#edit-panel:tpl=tpl-lib-edt:url=core/admin/library.php:arg=do~get&isbn~${$value.isbn}"\
				>${$value.bookname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
