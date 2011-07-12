/**
 *	@template NewsView
 *
**/
IITBHUCSE.jquery.template.NewsView = $.template('\
<div id="news-view-container" class="panel left"><fieldset>\
		<legend class="head">All Updates</legend>\
		<table class="margin5">\
			<tbody>\
				<tr>\<td class="bold">${news.newstitle}</td></tr>\
				<tr><td>${news.newsauthor}</td></tr>\
				<tr><td>${news.newsdescription}</td></tr>\
				<tr><td>${news.newscontent}</td></tr>\
				</tr>\
				<tr><td>\
					{{if news.newssize}}\
						<a href="core/space/read.php?spid=${news.newsattachment}" target="_blank">\
							Attachment [${ServiceClient.jquery.helper.readFileSize(news.newssize)}]\
						</a>\
					{{/if}}\
				</td></tr>\
			</tbody>\
		</table>\
	</fieldset>\
</div>');