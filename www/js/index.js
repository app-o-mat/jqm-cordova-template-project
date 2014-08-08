/*
App-o-Mat jQuery Mobile Cordova starter template
https://github.com/app-o-mat/jqm-cordova-template-project
http://app-o-mat.com

MIT License
https://github.com/app-o-mat/jqm-cordova-template-project/LICENSE.md
*/

var appomat = {};

appomat.app = {
	
    initialize: function() {
        var self = this;
        document.addEventListener('deviceready', function(){
            self.onDeviceReady();
        }, false);
    },

    onDeviceReady: function() {
		FastClick.attach(document.body);
    }

};
