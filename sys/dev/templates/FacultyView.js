/**
 *	@template FacultyView
 *
**/
IITBHUCSE.jquery.template.FacultyView = $.template('\
	<div id="faculty-view-container" class="panel left"><fieldset>\
			<legend class="head">All Faculty Members</legend>\
			<table class="grid">\
				<thead>\
					<tr>\
						<th>Name</th>\
						<th>Designation</th>\
						<th>Interests</th>\
						<th>Qualifications</th>\
						<th>Email</th>\
						<th>Phone No.</th>\
						<th>Status</th>\
					</tr>\
				</thead>\
				<tbody>\
					{{each faculty}}\
					<tr>\
						<td>${fname}</td>\
						<td>${IITBHUCSE.jquery.helper.getDesignation(fdesignation)}</td>\
						<td>${finterest}</td>\
						<td>${fqualification}</td>\
						<td>${femail}</td>\
						<td>${fphone}</td>\
						<td>${IITBHUCSE.jquery.helper.getStatus(fstatus)}</td>\
						</tr>\
					{{/each}}\
				</tbody>\
			</table>\
			</fieldset>\
	</div>');

/**
 *	@helper getDesignation
 *
**/
IITBHUCSE.jquery.helper.getDesignation = function(index){
	switch(index){
		case '1' :
			return 'Professor';
		case '2' :
			return 'Assist. Professor';
		case '3' :
			return 'Reader';
		case '4' :
			return 'Lecturer';
		default :
			return 'Unknown';
	}
}

/**
 *	@helper getStatus
 *
**/
IITBHUCSE.jquery.helper.getStatus = function(index){
	switch(index){
		case '1' :
			return 'Teaching';
		case '2' :
			return 'Retired';
		default :
			return 'Unknown';
	}
}
