sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/BusyIndicator',
	'com/swcc/SSP_UserManagement/util/api',
	"sap/ui/model/json/JSONModel"
], function (Controller, BusyIndicator, api, JSONModel) {
	"use strict";

	return Controller.extend("com.swcc.SSP_UserManagement.controller.BaseController", {
		getAPI: api,
		getRouter: function () {

			return sap.ui.core.UIComponent.getRouterFor(this);

		},

		addContentDensityClass: function () {

			return this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		/**
		 * Convenience method for getting the view model by name.
		 * @public
		 * @param {string} [sName] the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */

		getModel: function () {

			return this.getOwnerComponent().getModel();
		},

		/**
		 * Convenience method for setting the view model.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 */
		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * Getter for the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}

	});

});