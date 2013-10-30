var restartFirefox = {
// main restart logic
	ourRestart : function() {
		nsIAppStartup = Components.interfaces.nsIAppStartup;
		Components.classes["@mozilla.org/toolkit/app-startup;1"].getService(nsIAppStartup)
			.quit(nsIAppStartup.eRestart | nsIAppStartup.eAttemptQuit);
	}
};	