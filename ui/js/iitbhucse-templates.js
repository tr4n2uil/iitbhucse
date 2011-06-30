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
					<a class="navigate" href="#tplload:cntr=#grid-panel:tpl=tpl-crs-vw:url=core/course/course-all.php:arg=allparts~true"\>\
					All...</a>\
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
				<legend class="head">Edit Course #${course.crsid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="crsid" value="${course.crsid}" />\
				<label>Course Name\
					<input type="text" name="crsname" value="${course.crsname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Course name</p>\
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
 *	@template CourseView
 *
**/
IITBHUCSE.jquery.template.CourseView = $.template('\
<div id="courses-view-container" class="panel left"><fieldset>\
		<legend class="head">All Courses</legend>\
		{{each courses}}\
		<table class="margin5">\
			<tbody>\
				<tr>\<td class="bold">${crsid}</td></tr>\
				<tr><td class="bold">${crsname}</td></tr>\
				<tr><td>${crsdescription}</td></tr>\
				<tr><td>${IITBHUCSE.jquery.helper.getPart(crspart)}</td></tr>\
				</tr>\
				<tr><td>\
					{{if crshome}}\
						<a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${crshome}" \
						class="navigate" >Home Page</a>\
					{{/if}}\
				</td></tr>\
			</tbody>\
		</table>\
		{{/each}}\
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
 *	@template ElibraryAll
 *
**/
IITBHUCSE.jquery.template.ElibraryAll = $.template('\
<div id="elibrary-container">\
	<div id="edit-panel"></div>\
	<div id="elibrary-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Books</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-elibrary-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each ebooks}}\
				<li>\
					<a class="navigate" \
			href="#tplload:cntr=#edit-panel:tpl=tpl-elb-edt:url=core/admin/elibrary.php:arg=do~get&bookid~${$value.bookid}"\
				>${$value.bookname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template ElibraryBrowse
 *
**/
IITBHUCSE.jquery.template.ElibraryBrowse = $.template('\
<div id="elibrary-container">\
	<div id="grid-panel"></div>\
	<div id="elibrary-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All E-Books by Collection</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" href="#tplload:cntr=#grid-panel:tpl=tpl-elb-vw:url=core/elibrary/elibrary-all.php:arg=allbooks~true"\>\
					All...</a>\
				</li>\
				{{each bookcollection}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-elb-vw:url=core/elibrary/elibrary-all.php:arg=bookcollection~${bookcollection}"\
					>${bookcollection}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');

/**
 *	@template ElibraryEdit
 *
**/
IITBHUCSE.jquery.template.ElibraryEdit = $.template('\
<div id="admin-elib-panel">\
	<div id="file-panel"></div>\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book #${ebook.bookid}</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/elibrary.php:arg=do~rem&bookid~${ebook.bookid}:cf=true" \
				class="navigate" >Remove</a></li>{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-fl-edt:url=core/admin/space.php:arg=do~get&spid~${ebook.bookid}&type~E-Book" class="navigate" >Upload</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="elibrary-edit-container" class="panel form-panel">\
		<form action="core/admin/elibrary.php" method="post" class="navigate" id="_formsubmit:sel._admin-elib-panel">\
			<fieldset >\
				<legend class="head">Edit Book #${ebook.bookid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="bookid" value="${ebook.bookid}"/>\
				<label>Book Name\
					<input type="text" name="bookname" value="${ebook.bookname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Book Name</p>\
				<label>Author Name\
					<input type="text" name="bookauthor" value="${ebook.bookauthor}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Author Name</p>\
				<label>Book Description\
					<textarea name="bookdescription">${ebook.bookdescription}</textarea>\
				</label>\
				<label>Pages\
					<input type="text" name="bookpages" value="${ebook.bookpages}" />\
				</label>\
				<label>Book Collection\
					<input type="text" name="bookcollection" value="${ebook.bookcollection}" />\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template ElibraryView
 *
**/
IITBHUCSE.jquery.template.ElibraryView = $.template('\
<div id="elibrary-view-container" class="panel left"><fieldset>\
		<legend class="head">All E-Books in Collection ${bookcollection}</legend>\
		{{each ebooks}}\
		<table class="margin5">\
			<tbody>\
				<tr><td class="bold">${bookname}</td></tr>\
				<tr><td>${bookauthor}</td></tr>\
				<tr><td>${bookdescription}</td></tr>\
				<tr><td>Pages : ${bookpages}</td></tr>\
				<tr><td>\
					{{if booksize}}\
							Size : ${ServiceClient.jquery.helper.readFileSize(booksize)}\
						<a href="core/space/read.php?spid=${bookid}" target="_blank">\
						Download\
						</a>\
					{{/if}}\
				</td></tr>\
			</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
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
	<div id="file-panel"></div>\
	<div id="faculty-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Faculty #${faculty.fid} Options</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li>\
					<a href="#tplload:cntr=#edit-panel:url=core/admin/faculty.php:arg=do~rem&fid~${faculty.fid}:cf=true" \
						class="navigate" >Delete</a>\
				</li>\
				{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-fl-edt:url=core/admin/space.php:arg=do~get&spid~${faculty.fresume}&type~Resume" class="navigate" >Resume</a>\
				</li>\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-fl-edt:url=core/admin/space.php:arg=do~get&spid~${faculty.fphoto}&type~Photo" class="navigate" >Photo</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="faculty-edit-container" class="panel form-panel">\
		<form action="core/admin/faculty.php" method="post" class="navigate" id="_formsubmit:sel._admin-fac-panel">\
			<fieldset >\
				<legend class="head">Edit Faculty #${faculty.fid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="fid" value="${faculty.fid}"/>\
				<label>Email\
					<input type="text" name="femail" value="${faculty.femail}" disabled="disabled"/>\
				</label>\
				<label>Name\
					<input type="text" name="fname" value="${faculty.fname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Name</p>\
				<label>Designation\
				<select name="fdesignation" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 1)}}selected="selected"{{/if}}>Professor</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 2)}}selected="selected"{{/if}}>Assist. Professor</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 3)}}selected="selected"{{/if}}>Reader</option>\
						<option value="4" {{if ServiceClient.jquery.helper.equals(faculty.fdesignation, 4)}}selected="selected"{{/if}}>Lecturer</option>\
					</select>\
				</label>\
				<label>Qualification\
					<input type="text" name="fqualification" value="${faculty.fqualification}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Qualification</p>\
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
 *	@template FileEdit
 *
**/
IITBHUCSE.jquery.template.FileEdit = $.template('\
<div id="file-edit-panel" class="panel form-panel">\
	<form action="core/space/write.php" method="post" class="navigate" enctype="multipart/form-data" \
		id="_upload:sel._file-edit-panel" target="upload_target" >\
		<fieldset >\
			<legend class="head">Change ${typename}</legend>\
			<input type="hidden" name="spid" value="${space.spid}" />\
			<label>File type\
				<select name="stgmime">\
					<option value="application/pdf">Adobe PDF (.pdf)</option>\
					<option value="application/vnd.openxmlformats-officedocument.wordprocessingml.document">Microsoft Word Document (.docx)</option>\
					<option value="application/msword">Microsoft Word Document (.doc)</option>\
					<option value="image/png">PNG Image (.png)</option>\
					<option value="image/gif">GIF Image (.gif)</option>\
				</select>\
			</label>\
			<label>${typename}\
				<input type="file" name="stgfile"/>\
			</label>\
			<input name="submit" type="submit" value="Submit"  class="margin5"/>\
			<div class="status"></div>\
		</fieldset>\
	</form>\
</div>');

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
						{{if fhome}}\
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

/**
 *	@template LibraryAll
 *
**/
IITBHUCSE.jquery.template.LibraryAll = $.template('\
<div id="library-container">\
	<div id="edit-panel"></div>\
	<div id="library-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Books</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a href="#htmlload:cntr=#edit-panel:url=ui/html/form-library-add.html" \
						class="navigate" >Create New ...</a>\
				</li>\
				{{each books}}\
				<li>\
					<a class="navigate" \
			href="#tplload:cntr=#edit-panel:tpl=tpl-lib-edt:url=core/admin/library.php:arg=do~get&isbn~${$value.isbn}"\
				>${$value.bookname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template LibraryBrowse
 *
**/
IITBHUCSE.jquery.template.LibraryBrowse = $.template('\
<div id="library-container">\
	<div id="grid-panel"></div>\
	<div id="library-menu-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Books by Collection</legend>\
			<ul class="horizontal menu">\
				<li>\
					<a class="navigate" href="#tplload:cntr=#grid-panel:tpl=tpl-lib-vw:url=core/library/library-all.php:arg=allbooks~true"\>\
					All...</a>\
				</li>\
				{{each books}}\
				<li>\
					<a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-lib-vw:url=core/library/library-all.php:arg=bookcollection~${bookcollection}"\
					>${bookcollection}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');


/**
 *	@template LibraryEdit
 *
**/
IITBHUCSE.jquery.template.LibraryEdit = $.template('\
<div id="admin-lib-panel">\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book #${book.isbn}</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/library.php:arg=do~rem&isbn~${book.isbn}:cf=true" \
				class="navigate" >Remove</a></li>\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 1)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&isbn~${book.isbn}" \
				class="navigate" >Issue</a></li>\
				{{/if}}\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 2)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~return&isbn~${book.isbn}" \
				class="navigate" >Return</a></li>\
				{{/if}}\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="library-edit-container" class="panel form-panel">\
		<form action="core/admin/library.php" method="post" class="navigate" id="_formsubmit:sel._admin-lib-panel">\
			<fieldset >\
				<legend class="head">Edit Book #${book.isbn}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="isbn" value="${book.isbn}"/>\
				<label>Book ID\
					<input type="text" name="bookid" value="${book.bookid}"/>\
				</label>\
				<label>Book Name\
					<input type="text" name="bookname" value="${book.bookname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Book Name</p>\
				<label>Author Name\
					<input type="text" name="bookauthor" value="${book.bookauthor}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Author Name</p>\
				<label>Book Description\
					<textarea name="bookdescription">${book.bookdescription}</textarea>\
				</label>\
				<label>Pages\
					<input type="text" name="bookpages" value="${book.bookpages}" />\
				</label>\
				<label>Book Collection\
					<input type="text" name="bookcollection" value="${book.bookcollection}" />\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template LibraryTransaction
 *
**/
IITBHUCSE.jquery.template.LibraryTransaction = $.template('\
<div id="admin-lib-panel">\
	<div id="library-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit Book</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/library.php:arg=do~rem&isbn~${book.isbn}:cf=true" \
				class="navigate" >Remove</a></li>\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 1)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~get&isbn~${book.isbn}" \
				class="navigate" >Issue</a>{{/if}}</li>\
				<li>{{if ServiceClient.jquery.helper.equals(book.status, 2)}}<a href="#tplload:tpl=tpl-lib-trs:cntr=#edit-panel:url=core/admin/library.php:arg=do~return&isbn~${book.isbn}" \
				class="navigate" >Return</a>{{/if}}</li>\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="library-edit-container" class="panel form-panel">\
		<form action="core/admin/library.php" method="post" class="navigate" id="_formsubmit:sel._admin-lib-panel">\
			<fieldset >\
				<legend class="head">Issue ${book.isbn}</legend>\
				<input type="hidden" name="do" value="$issue"/>\
				<input type="hidden" name="isbn" value="${book.isbn}"/>\
				<input type="text" name="bookname" value="${book.bookname}" disabled="disabled"/>\
				<label>User ID\
					<input type="text" name="issuedto" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid User ID</p>\
				<input name="submit" type="submit" value="Issue" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');

/**
 *	@template LibraryView
 *
**/
IITBHUCSE.jquery.template.LibraryView = $.template('\
<div id="library-view-container" class="panel left"><fieldset>\
		<legend class="head">All books in Collection ${bookcollection}</legend>\
		{{each books}}\
		<table class="margin5">\
			<tbody>\
				<tr>\<td class="bold">${isbn}</td></tr>\
				<tr><td class="bold">${bookname}</td></tr>\
				<tr><td>${bookauthor}</td></tr>\
				<tr><td>${bookdescription}</td></tr>\
				<tr><td>Pages : ${bookpages}</td></tr>\
				<tr><td>${IITBHUCSE.jquery.helper.getBookStatus(status)}</td></tr>\
				{{if ServiceClient.jquery.helper.equals(status, 2)}}\
				<tr><td>Issued to (User ID): ${issuedto}</td></tr>{{/if}}\
				</tr>\
			</tbody>\
		</table>\
		{{/each}}\
	</fieldset>\
</div>');

/**
 *	@helper getBookStatus
 *
**/
IITBHUCSE.jquery.helper.getBookStatus = function(index){
	switch(index){
		case '1' :
			return 'Available';
		case '2' :
			return 'Not Available';
		default :
			return 'Unknown';
	}
}
/**
 *	@template PrivilegeAll
 *
**/
IITBHUCSE.jquery.template.PrivilegeAll = $.template('\
<div id="privilege-container">\
	<div id="edit-panel"></div>\
	<div id="privilege-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Privileges</legend>\
			<ul class="vertical menu">\
				<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-privilege-grant.html" \
						class="navigate" >Grant ...</a></li>\
				{{each privileges}}\
				<li>\
					<a class="navigate" href="#tplload:cntr=#edit-panel:tpl=tpl-prv-edt:url=core/admin/privilege.php:arg=do~get&type~${$value.type}">${$value.type}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template PrivilegeEdit
 *
**/
IITBHUCSE.jquery.template.PrivilegeEdit = $.template('\
<div id="admin-prv-panel">\
	<!--<div id="privilege-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Privilege ${type} Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/privilege.php:arg=do~remove&type~${type}:cf=true" \
				class="navigate" >Remove</a></li>\
			</ul>\
		</fieldset>\
	</div>-->\
	<div id="privilege-edit-container" class="panel left">\
			<fieldset >\
				<legend class="head">Users with ${type} privilege</legend>\
				<ul class="vertical menu">\
					<p class="desc">Click on user to revoke privilege</p>\
					{{each privileges}}\
					<li>\
						<a href="#tplload:cntr=#edit-panel:url=core/admin/privilege.php:arg=do~rvk&type~${$value.type}&uid~${$value.uid}:cf=true" class="navigate" >${$value.username}</a>\
					</li>\
					{{/each}}\
			</ul>\
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
 *	@template SpaceAll
 *
**/
IITBHUCSE.jquery.template.SpaceAll = $.template('\
<div id="space-container">\
	<div id="edit-panel"></div>\
	<div id="space-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Spaces</legend>\
			<ul class="vertical menu">\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/space.php:arg=do~add" \
						class="navigate" >Create New Entry ...</a>(for admin purposes only)</li>\
			</ul>\
			<ul class="horizontal menu">\
				{{each spaces}}\
				<li>\
					<a class="navigate" href="#tplload:cntr=#edit-panel:tpl=tpl-spe-all:url=core/admin/space.php:arg=do~all&spname~${$value.username}">/${$value.username}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
	</div>\
</div>');
/**
 *	@template SpaceEdit
 *
**/
IITBHUCSE.jquery.template.SpaceEdit = $.template('\
<div id="space-entry-container">\
	<div id="space-entry-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Space Entry &lt; /${space.spname}${space.spvfpath}${space.spvfname} &gt; Options</legend>\
			<ul class="horizontal menu">\
				<li><a href="core/space/read.php?vfile=${space.spname}${space.spvfpath}${space.spvfname}" target="_blank">Download</a></li>\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/space.php:arg=do~rem&spid~${space.spid}:cf=true" \
				class="navigate" >Remove</a></li>\
				<!--<li><a href="#tplload:cntr=#edit-panel:url=core/admin/space.php:arg=do~del&spid~${space.spid}:cf=true" \
				class="navigate" >Delete</a></li>-->\
				{{/if}}\
			</ul>\
		</fieldset>\
	</div>\
	<div id="file-edit-panel" class="panel form-panel">\
		<form action="core/space/write.php" method="post" class="navigate" enctype="multipart/form-data" id="_upload:sel._file-edit-panel" target="upload_target" >\
			<fieldset >\
				<legend class="head">Change File at &lt; /${space.spname}${space.spvfpath}${space.spvfname} &gt;</legend>\
				<input type="hidden" name="spid" value="${space.spid}" />\
				<label>File type\
					<select name="stgmime">\
						<option value="application/pdf">Adobe PDF (.pdf)</option>\
						<option value="application/vnd.openxmlformats-officedocument.wordprocessingml.document">Microsoft Word Document (.docx)</option>\
						<option value="application/msword">Microsoft Word Document (.doc)</option>\
						<option value="image/png">PNG Image (.png)</option>\
						<option value="image/gif">GIF Image (.gif)</option>\
					</select>\
				</label>\
				<label>File\
					<input type="file" name="stgfile"/>\
				</label>\
				<input name="submit" type="submit" value="Submit"  class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
/**
 *	@template SpaceEntryAll
 *
**/
IITBHUCSE.jquery.template.SpaceEntryAll = $.template('\
<div id="space-entry-container">\
	<div id="space-entry-all-container" class="panel left">\
		<fieldset>\
			<legend class="head">All Entries for Space /${spname}</legend>\
			<ul class="vertical menu">\
				{{each spaces}}\
				<li>\
					<a class="navigate" href="#tplload:cntr=#edit-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${$value.spid}">/${spname}${$value.spvfpath}${$value.spvfname}</a>\
				</li>\
				{{/each}}\
			</ul>\
		</fieldset>\
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
	<div id="file-panel"></div>\
	<div id="student-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">{{if admin}}Student #${student.stuid}{{else}}Profile{{/if}} Options</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/student.php:arg=do~rem&stuid~${student.stuid}:cf=true" \
				class="navigate" >Delete</a></li>\
				{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${student.stresume}" class="navigate" >Resume</a>\
				</li>\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${student.stphoto}" class="navigate" >Photo</a>\
				</li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="student-edit-container" class="panel form-panel">\
		<form action="core/admin/student.php" method="post" class="navigate" id="_formsubmit:sel._admin-std-panel">\
			<fieldset >\
				<legend class="head">{{if admin}}Edit Student #${student.stuid}{{else}}Edit Profile{{/if}}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="stuid" value="${student.stuid}"/>\
				<label>Email\
					<input type="text" name="stemail" value="${student.stemail}" disabled="disabled" size="50"/>\
				</label>\
				{{if admin}}\
				<label>Name\
					<input type="text" name="stname" value="${student.stname}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Name</p>\
				<label>Roll Number\
					<input type="text" name="strollno" value="${student.strollno}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid username</p>\
				<label>Course\
					<select name="stcourse" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.stcourse, 1)}}selected="selected"{{/if}}>B.Tech</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.stcourse, 2)}}selected="selected"{{/if}}>M.Tech</option>\
						<option value="3" {{if ServiceClient.jquery.helper.equals(student.stcourse, 3)}}selected="selected"{{/if}}>Ph.D</option>\
					</select>\
				</label>\
				<label>Year\
					<input type="text" name="styear" value="${student.styear}" />\
				</label>\
				<label>Status\
					<select name="ststatus" >\
						<option value="1" {{if ServiceClient.jquery.helper.equals(student.ststatus, 1)}}selected="selected"{{/if}}>Enrolled</option>\
						<option value="2" {{if ServiceClient.jquery.helper.equals(student.ststatus, 2)}}selected="selected"{{/if}}>Alumnus</option>\
					</select>\
				</label>\
				<label>Internship\
					<input type="text" name="stinternship" value="${student.stinternship}" />\
				</label>\
				<label>Placement\
					<input type="text" name="stplacement" value="${student.stplacement}" />\
				</label>\
				{{/if}}\
				<label>Phone\
					<input type="text" name="stphone" value="${student.stphone}"/>\
				</label>\
				<label>CGPA\
					<input type="text" name="stcgpa" value="${student.stcgpa}"/>\
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
		{{each students}}\
		<table class="margin5">\
			<tbody>\
				<tr><td rowspan="6" valign="top"><img src="core/space/read.php?spid=${stphoto}" alt="" height="100" ></td>\
					<td class="bold">${stname}</td>\
				</tr>\
				<tr><td>${stemail} ${stphone}</td></tr>\
				<tr><td>${strollno}</td></tr>\
				<tr><td class="italic"><span class="underline">Interests :</span> ${stinterest}</td></tr>\
				<tr><td>\
					{{if strssize}}\
						<a href="core/space/read.php?spid=${stresume}" target="_blank">\
							Resume [${ServiceClient.jquery.helper.readFileSize(strssize)}]\
						</a>\
					{{/if}}\
				</td></tr>\
				<tr><td>\
					{{if sthome}}\
						<a href="#tplload:cntr=#main-container:url=core/content/view.php:arg=cntid~${sthome}" \
						class="navigate" >Home Page</a>\
					{{/if}}\
				</td></tr>\
				</tbody>\
		</table>\
		{{/each}}\
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
					<input type="text" name="email" value="${user.email}" disabled="disabled" size="50"/>\
				</label>\
				<label>Username\
					<input type="text" name="newusername" value="${user.username}" class="required" />\
				</label>\
				<p class="error hidden margin5">Invalid username</p>\
				<label>Password\
					<input type="password" name="newpassword" value="" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Password</p>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
