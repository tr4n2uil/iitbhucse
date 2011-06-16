/**
 *	@template CoursesAll
 *
**/
IITBHUCSE.jquery.template.CourseAll = $.template('\
	<div class="course-content">\
				{{each courses}}\
					<div class="course-id">${crsid}</div>\
					<div class="course-name">${crsname}</div>\
					<div class="course-description">${crsdescription}</div>\
				{{/each}}\
			
	</div>');
