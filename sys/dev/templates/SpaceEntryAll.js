/**
 *	@template SpaceEntryAll
 *
**/
IITBHUCSE.jquery.template.SpaceEntryAll = $.template('\
<div id="space-entry-container">\
	<div id="space-entry-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Entries for Space /${spname}</legend>\
			<ul class="vertical menu">\
				{{each spaces}}\
				<li>\
					<a class="navigate" href="#tplload:cntr=#edit-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${$value.spid}">/${spname}${$value.spvfpath}${$value.spvfname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
