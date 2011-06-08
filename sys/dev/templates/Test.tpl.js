var TestTemplate = (function(){
	var tpl = $.template('<p class="abc">Name: ${name}</p>'
						+'<p>Time: ${time}</p>' );
	return tpl;
})();
