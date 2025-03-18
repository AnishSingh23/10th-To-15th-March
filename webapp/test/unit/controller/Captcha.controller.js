/*global QUnit*/

sap.ui.define([
	"comsap/captcha/controller/Captcha.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Captcha Controller");

	QUnit.test("I should test the Captcha controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
