/**
 *	@template FacultyView
 *
**/
IITBHUCSE.jquery.template.FacultyView = $.template('\
	<div id="faculty-view-container" class="horizontal-menu"><fieldset>\
			<legend>All Faculty Members</legend>\
			<table class="site"><thead><th>Name</th><th>Email</th><th>Designation</th>\
										<th>Interests</th><th>Qualifications</th><th>Email</th><th>Phone No.</th></tr></thead>\
			<tbody>\
				{{each students}}\
					<tr><td>${strollno}</td><td>${stname}</td><td>${stemail}</td>\
						<td>${stinterest}</td><td><a href="#${stresume}">Download</a></td></tr>\
				{{/each}}\
			</tbody></table>\
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

