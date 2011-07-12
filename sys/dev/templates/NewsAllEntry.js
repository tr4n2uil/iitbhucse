/**
 *	@template NewsAllEntry
 *
**/
IITBHUCSE.jquery.template.NewsAllEntry = $.template('\
<div id="news-view-container" class="panel left"><fieldset>\
		<legend class="head">All Updates</legend>\
		{{each news}}\
		<table class="margin5">\
			<tbody>\
				<tr>\<td class="bold">${newstitle}</td></tr>\
				<tr><td>${newsauthor}</td></tr>\
				<tr><td>${newsdescription}</td></tr>\
				<tr><td>${newscontent}</td></tr>\
				</tr>\
				<tr><td>\
					{{if (newssize>0)}}\
						<a href="core/space/read.php?spid=${newsattachment}" target="_blank">\
							Attachment [${ServiceClient.jquery.helper.readFileSize(newssize)}]\
						</a>\
					{{/if}}\
				</td></tr>\
			</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
</div>');