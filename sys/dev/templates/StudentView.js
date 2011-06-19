/**
 *	@template StudentView
 *
**/
IITBHUCSE.jquery.template.StudentView = $.template('\
<div id="students-view-container" class="panel left"><fieldset>\
		<legend class="head">All ${IITBHUCSE.jquery.helper.getCourse(stcourse)} Students Enrolled in ${styear}</legend>\
		<table class="grid">\
			<thead>\
				<tr>\
					<th>Roll No</th>\
					<th>Name</th>\
					<th>Email</th>\
					<th>Interests</th>\
					<th>Resume</th>\
				</tr>\
			</thead>\
			<tbody>\
				{{each students}}\
				<tr>\
					<td>${strollno}</td>\
					<td>${stname}</td>\
					<td>${stemail}</td>\
					<td>${stinterest}</td>\
					<td><a href="#${stresume}">Download</a></td>\
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
