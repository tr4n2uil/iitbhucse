/**
 *	@template StudentView
 *
**/
IITBHUCSE.jquery.template.StudentView = $.template('\
<div id="students-view-container" class="panel left"><fieldset>\
		<legend class="head">All ${IITBHUCSE.jquery.helper.getCourse(stcourse)} Students Enrolled in ${styear}</legend>\
		{{each students}}\
		<table class="margin5">\
			<tbody>\
				<tr><td rowspan="6" valign="top"><img src="core/space/read.php?spid=${stphoto}" alt="" height="100" ></td>\
					<td class="bold">${stname}</td>\
				</tr>\
				<tr><td>${stemail}</td></tr>\
				<tr><td>${strollno}</td></tr>\
				<tr><td class="italic"><span class="underline">Interests :</span> ${stinterest}</td></tr>\
				<tr><td>\
					{{if strssize}}\
						<a href="core/space/read.php?spid=${stresume}" target="_blank">\
							Resume [${ServiceClient.jquery.helper.readFileSize(strssize)}]\
						</a>\
					{{/if}}\
				</td></tr>\
				<tr><td>\
					{{if sthome}}\
						<a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${sthome}" \
						class="navigate" >Home Page</a>\
					{{/if}}\
				</td></tr>\
				</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
</div>');

/**
 *	@helper getCourse
 *
**/
IITBHUCSE.jquery.helper.getCourse = function(index){
	switch(index){
		case '1' :
			return 'B Tech';
		case '2' :
			return 'IDD';
		case '3' :
			return 'PhD';
		default :
			return 'Unknown';
	}
}
