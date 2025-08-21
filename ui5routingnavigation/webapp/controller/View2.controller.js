sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5routingnavigation.controller.View2", {
        onInit() {
            this._oRouter = this.getOwnerComponent().getRouter();
        },

        onPressGotoView3: function(oEvent){
            //lets collect the user entered Product ID
            let prdId = this.getView().byId("idPrd").getValue();


            //logic to navigate to View3
            this._oRouter.navTo("route_name_view3",{
                productId: prdId,
            });
        },
         
            
    });
});