/**
 *	@template LibraryView
 *
**/
IITBHUCSE.jquery.template.LibraryView = $.template('\
<div id="library-view-container" class="panel left"><fieldset>\
		<legend class="head">All books in Collection ${bookcollection}</legend>\
		{{each books}}\
		<table class="margin5">\
			<tbody>\
				<tr>\<td class="bold">${isbn}</td></tr>\
				<tr><td class="bold">${bookname}</td></tr>\
				<tr><td>${bookauthor}</td></tr>\
				<tr><td>${bookdescription}</td></tr>\
				<tr><td>Pages : ${bookpages}</td></tr>\
				<tr><td>${IITBHUCSE.jquery.helper.getBookStatus(status)}</td></tr>\
				{{if ServiceClient.jquery.helper.equals(status, 2)}}\
				<tr><td>Issued to (User ID): ${issuedto}</td></tr>{{/if}}\
				</tr>\
			</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
</div>');

/**
 *	@helper getBookStatus
 *
**/
IITBHUCSE.jquery.helper.getBookStatus = function(index){
	switch(index){
		case '1' :
			return 'Available';
		case '2' :
			return 'Not Available';
		default :
			return 'Unknown';
	}
}
