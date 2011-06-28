/**
 *	@template CourseView
 *
**/
IITBHUCSE.jquery.template.CourseView = $.template('\
<div id="courses-view-container" class="panel left"><fieldset>\
		<legend class="head">All Courses</legend>\
		{{each courses}}\
		<table class="margin5">\
			<tbody>\
				<tr>\<td class="bold">${crsid}</td></tr>\
				<tr><td class="bold">${crsname}</td></tr>\
				<tr><td>${crsdescription}</td></tr>\
				<tr><td>${IITBHUCSE.jquery.helper.getPart(crspart)}</td></tr>\
				</tr>\
			</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
</div>');

/**
 *	@helper getCourse
 *
**/
IITBHUCSE.jquery.helper.getPart = function(index){
	switch(index){
		case '1' :
			return 'Part I';
		case '2' :
			return 'Part II';
		case '3' :
			return 'Part III';
		case '4' :
			return 'Part IV';
		case '5' :
			return 'Part V';
		default :
			return 'Unknown';
	}
}
