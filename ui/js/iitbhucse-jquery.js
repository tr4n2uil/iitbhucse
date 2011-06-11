IITBHUCSE = {};
IITBHUCSE.jquery = {};

IITBHUCSE.jquery.view = {};
IITBHUCSE.jquery.module = {};
IITBHUCSE.jquery.renderer = {};
IITBHUCSE.jquery.navigator = {};
IITBHUCSE.jquery.requestor = {};
IITBHUCSE.jquery.template = {};
IITBHUCSE.jquery.helper = {};

IITBHUCSE.urls = {
	base : '/iitbhucse/',
	//base : '/',
	login : 'core/account/login.php'
};
/** *	Login module * *	@param key string *	@param sessionid string *	@param expires integer ***/IITBHUCSE.jquery.module.Login = {	run : function(message, memory){		$.cookie(message.key, message.sessionid, {			expires : message.expires		});		window.location.reload();		return false;	}};