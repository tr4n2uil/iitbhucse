/**
 *	@template FacultyView
 *
**/
IITBHUCSE.jquery.template.FacultyView = $.template('\
	<div id="faculty-view-container" class="panel left"><fieldset>\
			<legend class="head">All Faculty Members</legend>\
			{{each faculty}}\
			<table class="margin5">\
				<tbody>\
					<tr><td rowspan="6" valign="top"><img src="core/space/read.php?spid=${fphoto}" alt="" height="100" ></td>\
					<td class="bold">${fname}</td>\
					</tr>\
					<tr><td>${IITBHUCSE.jquery.helper.getDesignation(fdesignation)}</td></tr>\
					<tr><td>${fqualification}</td></tr>\
					<tr><td class="italic"><span class="underline">Interests :</span> ${finterest}</td></tr>\
					<tr><td>\
					<tr><td>${femail}</td></tr>\
					<tr><td>${fphone}</td></tr>\
					<tr><td>${IITBHUCSE.jquery.helper.getStatus(fstatus)}</td></tr>\
					<tr><td>\
						{{if frssize}}\
							<a href="core/space/read.php?spid=${fresume}" target="_blank">\
							Resume [${ServiceClient.jquery.helper.readFileSize(strssize)}]\
							</a>\
						{{/if}}\
					</td></tr>\
					<tr><td>\
						{{if sthome}}\
							<a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${fhome}" \
							class="navigate" >Home Page</a>\
						{{/if}}\
					</td></tr>\
				</tbody>\
			</table>\
			{{/each}}\
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

