sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5routingnavigation.controller.View3", {
        onInit() {
            this._oRouter = this.getOwnerComponent().getRouter();
            this._oRouter.getRoute("route_name_view3").attachPatternMatched(this._onPatternMatched);
        },

        _onPatternMatched: function(oEvent){
            //here we will have to logic to fetch the product id
            let receivedPrdId = oEvent.getParameter("arguments").productId;
            sap.m.MessageToast.show("Product ID coming from View 2 = "+receivedPrdId);
        }

        
    });
});