/**
 *	@template AdminStudent
 *
 *	
**/
IITBHUCSE.jquery.template.AdminStudent = (function(){
	var tpl = $.template('\
	<div id="admin-std-panel">\
		<form action="core/admin/student-add.php" method="post" class="navigate" title="#submitload:sel=#admin-std-panel">\
			<fieldset >\
				<legend>Student</legend>\
				<label>Name\
					<input type="text" name="stname" class="field"/>\
				</label>\
				<label>Roll No\
					<input type="text" name="strollno" class="field"/>\
				</label>\
				<label>Email\
				<input type="text" name="stemail" class="field" />\
				</label>\
				<label>Course\
					<input type="radio" name="stcourse" class="field" value="B Tech"/>\
					<input type="radio" name="stcourse" class="field" value="IDD"/>\
					<input type="radio" name="stcourse" class="field" value="PhD"/>\
				</label>\
				<label>Year\
					<input type="text" name="styear" class="field"/>\
				</label>\
				<label>Interests\
					<textarea name="stinterest" class="field"></textarea>\
				</label>\
				<input name="submit" type="submit" value="Submit" />\
				<input name="reset" type="reset" value="Reset" />\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>');
	return tpl;
})();
ServiceClient.jquery.template.Test = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
