/**
 *	@template NewsUpdate
 *
**/
IITBHUCSE.jquery.template.NewsUpdate = $.template('\
<div id="news-panel" class="panel">\
<div id="grid-panel"></div>\
	<fieldset>\
		<legend class="head">Latest Updates</legend>\
		<ul class="vertical menu">\
			{{each news}}\
				<li><a class="navigate" \
						href="#tplload:cntr=#main-container:tpl=tpl-nws-vw:url=core/news/news-all.php:arg=do~get&newsid~${newsid}"\
						>${newstitle}<br />\
						${newsdescription}</a>\
				</li>\
			{{/each}}\
			<li><a class="navigate" \
					href="#tplload:cntr=#grid-panel:tpl=tpl-nws-aen:url=core/news/news-all.php:arg=all~true"\
					>See All...</a><br />\
			</li>\
		</ul>\
	</fieldset>\
		</div>');
		