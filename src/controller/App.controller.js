sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.notificationsApp.controller.App", {
        onInit: function () {
            console.log('sap.ui.notificationsApp.controller.App - onInit');
            this.splitApp = this.getView().byId('splitApp');
        },
        onPressGoToMaster: function (e) {
            var sToPageId = e.getParameter("listItem").getCustomData()[0].getValue();
            
            this.splitApp.toDetail(this.createId(sToPageId));
        }
    });
});