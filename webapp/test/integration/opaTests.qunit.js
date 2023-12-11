/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/swcc/SSP_UserManagement/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});