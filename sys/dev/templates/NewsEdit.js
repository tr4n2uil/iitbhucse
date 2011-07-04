/**
 *	@template NewsEdit
 *
**/
IITBHUCSE.jquery.template.NewsEdit = $.template('\
<div id="admin-news-panel">\
	<div id="file-panel"></div>\
	<div id="news-options-container" class="panel left">\
		<fieldset>\
			<legend class="head">Edit News #${news.newsid}</legend>\
			<ul class="horizontal menu">\
				{{if admin}}\
				<li><a href="#tplload:cntr=#edit-panel:url=core/admin/news.php:arg=do~rem&newsid~${news.newsid}:cf=true" \
				class="navigate" >Remove</a></li>{{/if}}\
				<li><a href="#tplload:cntr=#file-panel:tpl=tpl-spc-edt:url=core/admin/space.php:arg=do~get&spid~${news.newsattachment}" class="navigate" >Upload Attachment</a>\
				</li>\
				<li><a href="core/space/read.php?spid=${news.newsattachment}" target="_blank">\
						Download Attachment\
						</a></li>\
			</ul>\
		</fieldset>\
	</div>\
	<div id="news-edit-container" class="panel form-panel">\
		<form action="core/admin/news.php" method="post" class="navigate" id="_formsubmit:sel._admin-news-panel">\
			<fieldset >\
				<legend class="head">Edit News #${news.newsid}</legend>\
				<input type="hidden" name="do" value="edit"/>\
				<input type="hidden" name="newsid" value="${news.newsid}"/>\
				<label>Title\
					<input type="text" name="newstitle" value="${news.newstitle}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Title</p>\
				<label>Author Name\
					<input type="text" name="newsauthor" value="${news.newsauthor}" class="required"/>\
				</label>\
					<p class="error hidden margin5">Invalid Author Name</p>\
					<label>Description\
					<input type="text" name="newsdescription" value="${news.newsdescription}" class="required" size="30"/>\
				</label>\
					<p class="error hidden margin5">Invalid Description</p>\
				<label>Content\
					<textarea name="newscontent">${news.newscontent}</textarea>\
				</label>\
				<label>Valid for\
					<input type="text" name="newsexpiry" value="${news.newsexpiry}" size="3"/>Days\
				</label>\
				<input name="submit" type="submit" value="Submit" class="margin5"/>\
				<input name="reset" type="reset" value="Reset" class="margin5"/>\
				<div class="status"></div>\
			</fieldset>\
		</form>\
	</div>\
</div>');
