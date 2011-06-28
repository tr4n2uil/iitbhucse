/**
 *	@template ElibraryAll
 *
**/
IITBHUCSE.jquery.template.ElibraryAll = $.template('\
<div id="elibrary-container">\
	<div id="edit-panel"></div>\
	<div id="elibrary-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Books</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-elibrary-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each ebooks}}\
				<li>\
					<a class="navigate" \
			href="#tplload:cntr=#edit-panel:tpl=tpl-elb-edt:url=core/admin/elibrary.php:arg=do~get&bookid~${$value.bookid}"\
				>${$value.bookname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
