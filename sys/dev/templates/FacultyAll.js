/**
 *	@template FacultyAll
 *
**/
IITBHUCSE.jquery.template.FacultyAll = $.template('\
	<div class="faculty-content">\
				{{each present}}\
					<div class="faculty-name">${fname}</div>\
					<div class="faculty-qualification">${fqualification}</div>\
					<div class="faculty-designation">${IITBHUCSE.jquery.helper.getDesignation(fdesignation)}</div>\
					<div class="faculty-email">${femail}</div>\
					<div class="faculty-phone">${fphone}</div>\
					<div class="faculty-interests">${finterests}</div>\
				{{/each}}\
				
				{{each old}}\
					<div class="faculty-name">${fname}</div>\
					<div class="faculty-qualification">${fqualification}</div>\
					<div class="faculty-designation">${IITBHUCSE.jquery.helper.getDesignation(fdesignation)}</div>\
					<div class="faculty-email">${femail}</div>\
					<div class="faculty-phone">${fphone}</div>\
					<div class="faculty-interests">${finterests}</div>\
				{{/each}}\
			
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

