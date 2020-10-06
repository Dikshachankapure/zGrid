sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.zgrid.controller.View1", {
		onInit: function () {
	var oModel = this.getOwnerComponent().getModel("MaintanaceData");
			this.getView().setModel(oModel);
		}
	});
});