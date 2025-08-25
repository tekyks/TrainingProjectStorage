sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5fragmentproject.controller.View1", {
        onInit() {
        },

        onClickFragmentButton:function(oEvent){
            sap.m.MessageToast.show("Fragment button clicked!");
        },

        callDialogFragment:function(oEvent){
            //this will load our dialog fragment
            this._oDialog = sap.ui.xmlfragment(this.getView().getId(), "ui5fragmentproject.view.fragment.DialogFragment", this);
            //lets attach fragment to our view
            this.getView().addDependent(this._oDialog);
            this._oDialog.open();
        },

        onPressDialogClose: function(){
            this._oDialog.close();
        }
    });
});