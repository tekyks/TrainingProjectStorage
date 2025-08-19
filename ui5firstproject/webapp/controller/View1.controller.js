sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("ui5firstproject.controller.View1", {
        onInit() {
            

        },

        onClickSubmit: function(oEvent){
            //here we have to put the logic

            //let capture the input box object first
            let oInputName = this.getView().byId("idInput");

            let capturedName = oInputName.getValue();

            if(capturedName === ""){
                MessageToast.show("Please enter your name first !!!");
            }else{
                MessageToast.show(`Hello ${capturedName}`);
            }
            
            //MessageToast.show("Hello " + capturedName);
        }




        // onClickHelloButton: function(oEvent){
        //     MessageToast.show("I am in UI5 training !!!!");
        // }
    });
});