SwarmLead = {};
SwarmLead.extjs = {};
SwarmLead.extjs.view = {};
SwarmLead.extjs.module = {};
SwarmLead.extjs.renderer = {};
/** *	Login module * *	@param key string *	@param sid string ***/SwarmLead.extjs.module.Login = (function(){	return {		execute : function(args){			var cp = new Ext.state.CookieProvider({				expires: new Date(new Date().getTime()+(1000*60*60*24*30)), // 30 days			});			cp.set(args.key, args.sid);			window.location.reload();		}	};})();