/**
 *	@template StudentAll
 *
**/
IITBHUCSE.jquery.template.StudentAll = $.template('\
	<div class="faculty-content">\
				{{each students}}\
					<div class="student-name">${stname}</div>\
					<div class="student-rollno">${strollno}</div>\
					<div class="student-email">${stemail}</div>\
					<div class="student-course">${IITBHUCSE.jquery.helper.getCourse(stcourse)}</div>\
					<div class="student-year">${styear}</div>\
					<div class="student-interests">${stinterest}</div>\
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

