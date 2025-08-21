sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5routingnavigation.controller.View1", {
        onInit() {
            this._oRouter = this.getOwnerComponent().getRouter();
        },

        onPressGotoView2: function(oEvent){
            //logic to navigate to View2
            this._oRouter.navTo("route_name_view2");
        }
    });
});