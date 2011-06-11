/**
 *	@template StudentAll
 *
**/
IITBHUCSE.jquery.template.StudentAll = $.template('\
	<div>\
			<table class="site"><thead><tr><th>ID</th><th>Name</th><th>Roll No</th><th>Email</th>\
										<th>Course</th><th>Year</th><th>Interests</th><th>Resume</th></tr></thead>\
			<tbody>\
				{{each students}}\
					<tr><td>${stuid}</td><td>${stname}</td><td>${strollno}</td><td>${stemail}</td>\
						<td>${IITBHUCSE.jquery.helper.getCourse(stcourse)}</td><td>${styear}</td>\
						<td>${stinterest}</td><td><a href="#${stresume}">Download</a></td></tr>\
				{{/each}}\
			</tbody></table>\
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

