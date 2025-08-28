sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5odataintegration.controller.ProductDetails", {
        onInit() {
            //initialize the router
            this._oRouter = this.getOwnerComponent().getRouter();
            this._oRouter.getRoute("RouteProductDetails").attachPatternMatched(this._onPatternMatched, this);
            //initialize blank json model with Product Details data
            let oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({
                ProductID:"",
                ProductName:""
            });
            this.getView().setModel(oModel, "jProductDetails");
        },

        _onPatternMatched: function(oEvent){
            let selectedProductId = oEvent.getParameter("arguments").PrdId;
            sap.m.MessageToast.show("Selected Product Id = " + selectedProductId);
            let that = this;
            //add busy indicator
            this.getView().setBusy(true);
            //get the selected product data from OData Service
            this.getView().getModel().read(`/Products(${selectedProductId})`,{
                method: "GET",
                success: function(data){ //success callback function
                    that.getView().getModel("jProductDetails").setData({
                        ProductID: data.ProductID,
                        ProductName: data.ProductName
                    });
                    that.getView().setBusy(false);
                },
                error: function(oError){ //error callback function
                    sap.m.MessageToast.show("Error occurred");
                    that.getView().setBusy(false);
                }
            });  //odata read operations
        }
    });
});