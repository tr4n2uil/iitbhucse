IITBHUCSE = {};
IITBHUCSE.jquery = {};

IITBHUCSE.jquery.view = {};
IITBHUCSE.jquery.module = {};
IITBHUCSE.jquery.renderer = {};
IITBHUCSE.jquery.navigator = {};
IITBHUCSE.jquery.requestor = {};
IITBHUCSE.jquery.template = {};

IITBHUCSE.urls = {
	base : '/iitbhucse/',
	//base : '/',
	login : 'core/account/login.php'
};
/** *	Login module * *	@param data object ***/IITBHUCSE.jquery.module.Login = {	run : function(message, memory){		if(memory.data.success){			$.cookie(memory.data.key, memory.data.sessionid, {				expires : memory.data.expires			});			$('div#login-panel input[name=login]').removeAttr('disabled');			window.location.reload();			return false;		}		else {			$('div#login-panel input[name=login]').removeAttr('disabled');			memory.data = memory.data.msg;		}		return true;	}};/** *	Login navigator * *	@param type string *	@param tabtitle string *	@param id integer ***/IITBHUCSE.jquery.navigator.Login = function(config){	var d= new Date();	var inputs = $('div#login-panel input.field');	$('div#login-panel input[name=login]').attr('disabled', true);		return [{		service : ServiceClient.jquery.view.ElementView,		elementid : 'div#login-panel div.status'	},{		service : ServiceClient.jquery.loader.AjaxLoader,		loadurl : $('div#login-panel form').attr('action'),		loadparams : {			username : inputs.eq(0).val(),			password : inputs.eq(1).val(),			_ts : d.getTime()		},		workflow : [{			service : IITBHUCSE.jquery.module.Login		},{			service : ServiceClient.jquery.renderer.ContentUI		}]	}];}/** *	Reset navigator * *	@param type string *	@param tabtitle string *	@param id integer ***/IITBHUCSE.jquery.navigator.Reset = function(config){	var d= new Date();	var inputs = $('div#reset-panel input.field');	$('div#reset-panel input[name=submit]').attr('disabled', true);		return [{		service : ServiceClient.jquery.view.ElementView,		elementid : 'div#reset-panel div.status'	},{		service : ServiceClient.jquery.loader.AjaxLoader,		loadurl : $('div#reset-panel form').attr('action'),		loadparams : {			username : inputs.eq(0).val(),			email : inputs.eq(1).val(),			_ts : d.getTime()		},		workflow : [{			service : ServiceClient.jquery.module.Process,			selector : 'div#reset-panel input[name=submit]'		},{			service : ServiceClient.jquery.renderer.ContentUI		}]	}];}