sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5odataintegration.controller.ProductList", {
        onInit() {
            //initialize the router
            this._oRouter = this.getOwnerComponent().getRouter();
        },

        onItemPress:function(oEvent){
            //sap.m.MessageToast.show("Item Pressed !");
            let oSelectedItem = oEvent.getSource();
            let contexts = oSelectedItem.getBindingContext();
            //sap.m.MessageToast.show("Prd Id = " + contexts.getObject().ProductID);
            this._oRouter.navTo("RouteProductDetails",{
                "PrdId": contexts.getObject().ProductID
            });
        }
    });
});