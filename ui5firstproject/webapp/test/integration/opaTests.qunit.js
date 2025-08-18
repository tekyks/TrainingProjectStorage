/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["ui5firstproject/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
