/**
 *	@template SpaceAll
 *
**/
IITBHUCSE.jquery.template.SpaceAll = $.template('\
<div id="space-container">\
	<div id="edit-panel"></div>\
	<div id="space-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Spaces</legend>\
			<ul class="vertical menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/space.php:arg=do~add" \
						class="navigate" >Create New Entry ...</a>(for admin purposes only)</li>\
			</ul>\
			<ul class="horizontal menu">\
				{{each spaces}}\
				<li>\
					<a class="navigate" href="#tplload:cntr=#edit-panel:tpl=tpl-spe-all:url=core/admin/space.php:arg=do~all&spname~${$value.username}">/${$value.username}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
