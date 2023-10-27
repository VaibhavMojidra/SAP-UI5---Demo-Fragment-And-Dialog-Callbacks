sap.ui.define([
	"sap/ui/core/UIComponent"
	],function(UIComponent){
	"use strict";	
		return UIComponent.extend("com.vaibhavmojidra.fragmentanddialogcallbacksdemo.Component",{
			metadata:{
				interfaces: ["sap.ui.core.IAsyncContentCreation"],
				manifest: "json"
			},
			init:function(){
				UIComponent.prototype.init.apply(this, arguments);
				
			}
		});
	}
);