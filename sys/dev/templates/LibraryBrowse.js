/**
 *	@template LibraryBrowse
 *
**/
IITBHUCSE.jquery.template.LibraryBrowse = $.template('\
<div id="library-container">\
	<div id="grid-panel"></div>\
	<div id="library-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Books by Collection</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" href="#tplload:cntr=#grid-panel:tpl=tpl-lib-vw:url=core/library/library-all.php:arg=allbooks~true"\>\
					All...</a>\
				</li>\
				{{each books}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-lib-vw:url=core/library/library-all.php:arg=bookcollection~${bookcollection}"\
					>${bookcollection}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');

