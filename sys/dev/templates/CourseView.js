/**
 *	@template CourseView
 *
**/
IITBHUCSE.jquery.template.CourseView = $.template('\
<div id="courses-view-container" class="panel left"><fieldset>\
		<legend class="head">All Courses</legend>\
		<table class="grid">\
			<thead>\
				<tr>\
					<th>Course ID</th>\
					<th>Course Name</th>\
					<th>Description</th>\
					<th>Course Part</th>\
				</tr>\
			</thead>\
			<tbody>\
				{{each courses}}\
				<tr>\
					<td>${crsid}</td>\
					<td>${crsname}</td>\
					<td>${crsdescription}</td>\
					<td>${IITBHUCSE.jquery.helper.getPart(crspart)}</td>\
				</tr>\
				{{/each}}\
			</tbody>\
		</table>\
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
