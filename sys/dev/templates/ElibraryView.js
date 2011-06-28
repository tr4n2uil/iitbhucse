/**
 *	@template ElibraryView
 *
**/
IITBHUCSE.jquery.template.ElibraryView = $.template('\
<div id="elibrary-view-container" class="panel left"><fieldset>\
		<legend class="head">All E-Books in Collection ${bookcollection}</legend>\
		{{each ebooks}}\
		<table class="margin5">\
			<tbody>\
				<tr><td class="bold">${bookname}</td></tr>\
				<tr><td>${bookauthor}</td></tr>\
				<tr><td>${bookdescription}</td></tr>\
				<tr><td>Pages : ${bookpages}</td></tr>\
				<tr><td>\
					{{if booksize}}\
							Size : ${ServiceClient.jquery.helper.readFileSize(booksize)}\
						<a href="core/space/read.php?spid=${bookid}" target="_blank">\
						Download\
						</a>\
					{{/if}}\
				</td></tr>\
			</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
</div>');

