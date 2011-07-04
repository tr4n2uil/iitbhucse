/**
 *	@template NewsAll
 *
**/
IITBHUCSE.jquery.template.NewsAll = $.template('\
<div id="news-container">\
	<div id="edit-panel"></div>\
	<div id="news-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All News</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-news-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each news}}\
				<li>\
					<a class="navigate" \
			href="#tplload:cntr=#edit-panel:tpl=tpl-nws-edt:url=core/admin/news.php:arg=do~get&newsid~${$value.newsid}"\
				>${$value.newstitle}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
