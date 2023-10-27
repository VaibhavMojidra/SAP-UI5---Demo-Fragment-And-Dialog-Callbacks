sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function(Controller) {
		"use strict";
		return Controller.extend("com.vaibhavmojidra.fragmentanddialogcallbacksdemo.controller.App",{
			onClick:function(){
				this.pMyDialog??=this.loadFragment({
					name:"com.vaibhavmojidra.fragmentanddialogcallbacksdemo.view.HelloDialog"
				});
				
				this.pMyDialog.then((oDialog) => oDialog.open());
			},
			onCloseDialog:function(){
				this.byId('helloDialog').close();
			}
		});
	}
);