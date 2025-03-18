sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.captcha.controller.Captcha", {
        onInit() {
        },
        onValid:function(oEvent){
            alert(`Valid Captcha ${oEvent.getParameter("value")}`)
          }
    });
});