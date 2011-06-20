/**
 *	@template ContentAll
 *
**/
IITBHUCSE.jquery.template.ContentAll = $.template('\
<div id="content-container">\
	<div id="edit-panel"></div>\
	<div id="content-all-container" class="panel left"><fieldset>\
		<legend class="head">All Contents</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-content-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each contents}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-cnt-edt:url=core/admin/content.php:arg=do~get&cntid~${$value.cntid}"\
					>${$value.cntname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template ContentEdit
 *
**/
IITBHUCSE.jquery.template.ContentEdit = $.template('\
<div id="admin-cnt-panel" >\
	<div id="content-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Content #${content.cntid} Options</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${content.cntid}" \
						class="navigate" >View</a>\
				</li>\
				{{if admin}}\
				<li>\
					<a href="#tplload:cntr=#edit-panel:url=core/admin/content.php:arg=do~rem&cntid~${content.cntid}:cf=true" \
					class="navigate" >Delete</a>\
				</li>\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="content-edit-container" class="panel form-panel">\
		<form action="core/admin/content.php" method="post" class="navigate" id="_formsubmit:sel._admin-cnt-panel">\
			<fieldset >\
				<legend class="head">Edit Content #${content.cntid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="cntid" value="${content.cntid}"/>\
				<label>Name\
					<input type="text" name="cntname" value="${content.cntname}" disabled="disabled"/>\
				</label>\
				<label>Style Type\
					<select name="cntstype" {{if admin}} {{else}}disabled="disabled"{{/if}}>\
						<option value="1" {{if ServiceClient.jquery.helper.equals(content.cntstype, 1)}}selected="selected"{{/if}}>Inline</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(content.cntstype, 2)}}selected="selected"{{/if}}>Resource</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(content.cntstype, 3)}}selected="selected"{{/if}}>File</option>\
					</select>\
				</label>\
				<label>Style</label>\
				<textarea name="cntstyle" rows="15">${content.cntstyle}</textarea>\
				<label>Template Type\
					<select name="cntttype" {{if admin}} {{else}}disabled="disabled"{{/if}}>\
						<option value="1" {{if ServiceClient.jquery.helper.equals(content.cntttype, 1)}}selected="selected"{{/if}}>Inline</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(content.cntttype, 2)}}selected="selected"{{/if}}>Resource</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(content.cntttype, 3)}}selected="selected"{{/if}}>File</option>\
					</select>\
				</label>\
				<label>Template</label>\
				<textarea name="cnttpl" rows="15" >${content.cnttpl}</textarea>\
				<label>Data Type\
					<select name="cntdtype" {{if admin}} {{else}}disabled="disabled"{{/if}}>\
						<option value="1" {{if ServiceClient.jquery.helper.equals(content.cntdtype, 1)}}selected="selected"{{/if}}>Inline</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(content.cntdtype, 2)}}selected="selected"{{/if}}>Resource</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(content.cntdtype, 3)}}selected="selected"{{/if}}>File</option>\
						<option value="4" {{if ServiceClient.jquery.helper.equals(content.cntdtype, 4)}}selected="selected"{{/if}}>Query</option>\
					</select>\
				</label>\
				<label>Data</label>\
				<textarea name="cntdata" rows="15">${content.cntdata}</textarea>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template CourseAll
 *
**/
IITBHUCSE.jquery.template.CourseAll = $.template('\
<div id="course-container">\
	<div id="edit-panel"></div>\
	<div id="course-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Courses</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-course-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each courses}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-crs-edt:url=core/admin/course.php:arg=do~get&crsid~${$value.crsid}"\
					>${$value.crsid}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');

/**
 *	@template CourseEdit
 *
**/
IITBHUCSE.jquery.template.CourseEdit = $.template('\
<div id="admin-crs-panel">\
	<div id="course-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Course #${course.crsid} Options</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#tplload:cntr=#edit-panel:url=core/admin/course.php:arg=do~rem&crsid~${course.crsid}:cf=true" \
						class="navigate" >Delete</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="course-edit-container" class="panel form-panel">\
		<form action="core/admin/course.php" method="post" class="navigate" id="_formsubmit:sel._admin-crs-panel">\
			<fieldset >\
				<legend class="head">Edit Course #${course.crsid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="crsid" value="${course.crsid}" />\
				<label>Course Name\
					<input type="text" name="crsname" value="${course.crsname}" />\
				</label>\
				<label>Course Description\
					<textarea name="crsdescription" rows="5" >${course.crsdescription}</textarea>\
				</label>\
				<label>Course Part\
					<select name="crspart" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(course.crspart, 1)}}selected="selected"{{/if}}>Part I</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(course.crspart, 2)}}selected="selected"{{/if}}>Part II</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(course.crspart, 3)}}selected="selected"{{/if}}>Part III</option>\
						<option value="4" {{if ServiceClient.jquery.helper.equals(course.crspart, 4)}}selected="selected"{{/if}}>Part IV</option>\
						<option value="5" {{if ServiceClient.jquery.helper.equals(course.crspart, 5)}}selected="selected"{{/if}}>Part V</option>\
					</select>\
				</label><input name="submit" type="submit" value="Submit" class="margin5" />\
				<input name="reset" type="reset" value="Reset" class="margin5" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template FacultyAll
 *
**/
IITBHUCSE.jquery.template.FacultyAll = $.template('\
<div id="faculty-container">\
	<div id="edit-panel"></div>\
	<div id="faculty-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Faculty Members</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-faculty-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each faculty}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-fac-edt:url=core/admin/faculty.php:arg=do~get&fid~${$value.fid}"\
					>${$value.fname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template FacultyEdit
 *
**/
IITBHUCSE.jquery.template.FacultyEdit = $.template('\
<div id="admin-fac-panel">\
	<div id="faculty-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Faculty #${faculty.fid} Options</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#tplload:cntr=#edit-panel:url=core/admin/faculty.php:arg=do~rem&fid~${faculty.fid}:cf=true" \
						class="navigate" >Delete</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="faculty-edit-container" class="panel form-panel">\
		<form action="core/admin/faculty.php" method="post" class="navigate" id="_formsubmit:sel._admin-fac-panel">\
			<fieldset >\
				<legend class="head">Edit Faculty #${faculty.fid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="fid" value="${faculty.fid}"/>\
				<label>Email\
					<input type="text" name="femail" value="${faculty.femail}" disabled="disabled"/>\
				</label>\
				<label>Name\
					<input type="text" name="fname" value="${faculty.fname}"/>\
				</label>\
				<label>Designation\
				<select name="fdesignation" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 1)}}selected="selected"{{/if}}>Professor</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 2)}}selected="selected"{{/if}}>Assist. Professor</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 3)}}selected="selected"{{/if}}>Reader</option>\
						<option value="4" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 4)}}selected="selected"{{/if}}>Lecturer</option>\
					</select>\
				</label>\
				<label>Qualification\
					<input type="text" name="fqualification" value="${faculty.fqualification}"/>\
				</label>\
				<label>Phone No\
					<input type="text" name="fphone" value="${faculty.fphone}" />\
				</label>\
				<label>Status\
				<select name="fstatus">\
				<option value="1" {{if ServiceClient.jquery.helper.equals(faculty.fstatus, 1)}}selected="selected"{{/if}}>Teaching</option>\
				<option value="2" {{if ServiceClient.jquery.helper.equals(faculty.fstatus, 2)}}selected="selected"{{/if}}>Retired</option>\
				</select>\
				</label>\
				<label>Interests\
					<textarea name="finterest" rows="5" >${faculty.finterest}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template ResourceAll
 *
**/
IITBHUCSE.jquery.template.ResourceAll = $.template('\
<div id="resource-container">\
	<div id="edit-panel"></div>\
	<div id="resource-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Resources</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-resource-add.html" \
							class="navigate" >Create New ...</a>\
				</li>\
				{{each resources}}\
				<li>\
					<a class="navigate" \
		href="#tplload:cntr=#edit-panel:tpl=tpl-rsrc-edt:url=core/admin/resource.php:arg=do~get&rsrcid~${$value.rsrcid}"\
					>${$value.rsrcname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template ResourceEdit
 *
**/
IITBHUCSE.jquery.template.ResourceEdit = $.template('\
<div id="admin-rsrc-panel">\
	<div id="resource-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Resource #${resource.rsrcid} Options</legend>\
			<ul class="horizontal menu">\
				<li>\
			<a href="#tplload:cntr=#edit-panel:url=core/admin/resource.php:arg=do~rem&rsrcid~${resource.rsrcid}:cf=true" \
				class="navigate" >Delete</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="resource-edit-container" class="panel form-panel">\
		<form action="core/admin/resource.php" method="post" class="navigate" id="_formsubmit:sel._admin-rsrc-panel">\
			<fieldset >\
				<legend class="head">Edit Resource #${resource.rsrcid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="rsrcid" value="${resource.rsrcid}"/>\
				<label>Name\
					<input type="text" name="rsrcname" value="${resource.rsrcname}" disabled="disabled"/>\
				</label>\
				<label>Content</label>\
				<textarea name="resource" rows="15">${resource.resource}</textarea>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template StudentAll
 *
**/
IITBHUCSE.jquery.template.StudentAll = $.template('\
<div id="student-container">\
	<div id="edit-panel"></div>\
	<div id="student-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Students</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-student-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each students}}\
				<li>\
					<a class="navigate" \
			href="#tplload:cntr=#edit-panel:tpl=tpl-std-edt:url=core/admin/student.php:arg=do~get&stuid~${$value.stuid}"\
				>${$value.strollno}\\${$value.stname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template StudentBrowse
 *
**/
IITBHUCSE.jquery.template.StudentBrowse = $.template('\
<div id="student-container">\
	<div id="grid-panel"></div>\
	<div id="student-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Students by Enrollment year</legend>\
			{{each allyear}}\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-vw:url=core/student/student-all.php:arg=styear~${styear}&stcourse~1"\
					>B Tech ${styear}</a>\
				</li>\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-vw:url=core/student/student-all.php:arg=styear~${styear}&stcourse~2"\
					>IDD ${styear}</a>\
				</li>\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-vw:url=core/student/student-all.php:arg=styear~${styear}&stcourse~3"\
					>PhD ${styear}</a>\
				</li>\
			</ul>\
			{{/each}}\
		</fieldset>\
	</div>\
</div>');

/**
 *	@template StudentEdit
 *
**/
IITBHUCSE.jquery.template.StudentEdit = $.template('\
<div id="admin-std-panel">\
	<div id="student-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Student #${student.stuid} Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/student.php:arg=do~rem&stuid~${student.stuid}:cf=true" \
				class="navigate" >Delete</a></li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="student-edit-container" class="panel form-panel">\
		<form action="core/admin/student.php" method="post" class="navigate" id="_formsubmit:sel._admin-stu-panel">\
			<fieldset >\
				<legend class="head">Edit Student #${student.stuid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="stuid" value="${student.stuid}"/>\
				<label>Email\
					<input type="text" name="stemail" value="${student.stemail}" disabled="disabled"/>\
				</label>\
				<label>Name\
					<input type="text" name="stname" value="${student.stname}"/>\
				</label>\
				<label>Roll Number\
					<input type="text" name="strollno" value="${student.strollno}"/>\
				</label>\
				<label>Course\
					<select name="stcourse" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.stcourse, 1)}}selected="selected"{{/if}}>B.Tech</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.stcourse, 2)}}selected="selected"{{/if}}>M.Tech</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(student.stcourse, 3)}}selected="selected"{{/if}}>Ph.D</option>\
					</select>\
				</label>\
				<label>Year\
					<input type="text" name="styear" value="${student.styear}"/>\
				</label>\
				<label>Status\
					<select name="ststatus">\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.ststatus, 1)}}selected="selected"{{/if}}>Enrolled</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.ststatus, 2)}}selected="selected"{{/if}}>Alumnus</option>\
					</select>\
				</label>\
				<label>CGPA\
					<input type="text" name="stcgpa" value="${student.stcgpa}"/>\
				</label>\
				<label>Internship\
					<input type="text" name="stinternship" value="${student.stinternship}"/>\
				</label>\
				<label>Placement\
					<input type="text" name="stplacement" value="${student.stplacement}"/>\
				</label>\
				<label>Interests\
					<textarea name="stinterest" rows="5">${student.stinterest}</textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
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
ServiceClient.jquery.template.Test = $.template('\
	<p class="abc">Name: ${name}</p><p>Time: ${time}</p>' );

/**
 *	@template UserAll
 *
**/
IITBHUCSE.jquery.template.UserAll = $.template('\
<div id="user-container">\
	<div id="edit-panel"></div>\
	<div id="user-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Users</legend>\
			<ul class="horizontal menu">\
				<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-user-add.html" \
						class="navigate" >Create New ...</a></li>\
				{{each users}}\
				<li>\
					<a class="navigate" \
					href="#tplload:cntr=#edit-panel:tpl=tpl-usr-edt:url=core/admin/user.php:arg=do~get&uid~${$value.uid}"\
					>${$value.username}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template UserEdit
 *
**/
IITBHUCSE.jquery.template.UserEdit = $.template('\
<div id="admin-usr-panel">\
	<div id="user-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">User #${user.uid} Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/user.php:arg=do~rem&uid~${user.uid}:cf=true" \
				class="navigate" >Delete</a></li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="user-edit-container" class="panel form-panel">\
		<form action="core/admin/user.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-usr-panel">\
			<fieldset >\
				<legend class="head">Edit User #${user.uid} Credentials</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="uid" value="${user.uid}"/>\
				<label>Email\
					<input type="text" name="email" value="${user.email}" disabled="disabled"/>\
				</label>\
				<label>Username\
					<input type="text" name="newusername" value="${user.username}"/>\
				</label>\
				<label>Password\
					<input type="password" name="newpassword" value=""/>\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');



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


/**
 *	@template CourseBrowse
 *
**/
IITBHUCSE.jquery.template.CourseBrowse = $.template('\
<div id="course-container">\
	<div id="grid-panel"></div>\
	<div id="course-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Courses by Part</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-crs-vw:url=core/course/course-all.php:arg=allparts~true"\
					>All...</a>\
				</li>\
				{{each courses}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-crs-vw:url=core/course/course-all.php:arg=crspart~${crspart}"\
					>${IITBHUCSE.jquery.helper.getPart(crspart)}</a>\
				</li>\
				{{/each}}\
				</ul>\
		</fieldset>\
	</div>\
</div>');

