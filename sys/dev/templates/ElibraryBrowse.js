/**
 *	@template ElibraryBrowse
 *
**/
IITBHUCSE.jquery.template.ElibraryBrowse = $.template('\
<div id="elibrary-container">\
	<div id="grid-panel"></div>\
	<div id="elibrary-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All E-Books by Collection</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" href="#tplload:cntr=#grid-panel:tpl=tpl-elb-vw:url=core/elibrary/elibrary-all.php:arg=allbooks~true"\>\
					All...</a>\
				</li>\
				{{each ebooks}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-elb-vw:url=core/elibrary/elibrary-all.php:arg=bookcollection~${bookcollection}"\
					>${bookcollection}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');

