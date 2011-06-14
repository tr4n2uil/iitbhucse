/**
 *	@template ResourceAll
 *
**/
IITBHUCSE.jquery.template.ResourceAll = $.template('\
	<div id="resource-container">\
		<div id="edit-panel"></div>\
		<div id="resource-all-container" class="horizontal-menu">\
			<ul>\
			<li><a href="#htmlload:cntr=#edit-panel:url=ui/html/form-resource-add.html" \
			class="navigate" >Create New ...</a></li>\
			{{each resources}}\
	<li><a class="navigate" \
	href="#tplload:cntr=#edit-panel:tpl=tpl-rsrc-edt:url=core/admin/resource.php:arg=do~get&rsrcid~${$value.rsrcid}"\
		>${$value.rsrcname}</a></li>\
			{{/each}}\
			</ul>\
		</div>\
	</div>');

/**
 *	@template ResourceEdit
 *
**/
IITBHUCSE.jquery.template.ResourceEdit = $.template('\
	<div id="admin-rsrc-panel" class="form-panel" >\
		<form action="core/admin/resource.php" method="post" class="navigate" \
				id="_formsubmit:sel._admin-rsrc-panel">\
			<fieldset >\
				<legend>Edit Resource #${resource.rsrcid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="rsrcid" value="${resource.rsrcid}"/>\
				<label>Name\
					<input type="text" name="rsrcname" value="${resource.rsrcname}" disabled="disabled"/>\
				</label>\
				<label>Content</label>\
				<textarea name="resource" rows="15" cols="80">${resource.resource}</textarea>\
				<input name="submit" type="submit" value="Submit" />\
				<input name="reset" type="reset" value="Reset" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
</div>');

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

/**
 *	@template Students
 *
**/
IITBHUCSE.jquery.template.StudentBrowse = $.template('\
	<div id="student-container">\
		<div id="student-menu-container" class="horizontal-menu">\
			<ul>\
			{{each allyear}}\
	<li><a class="navigate" \
	href="#tplload:cntr=#grid-panel:tpl=tpl-std-all:url=core/student/student-all.php:arg=styear~${styear}"\
		>${styear}</a></li>\
			{{/each}}\
			</ul>\
		</div>\
		<div id="edit-panel"></div>\
		<div id="grid-panel"></div>\
	</div>');

ServiceClient.jquery.template.Test = $.template('\
	<p class="abc">Name: ${name}</p><p>Time: ${time}</p>' );

