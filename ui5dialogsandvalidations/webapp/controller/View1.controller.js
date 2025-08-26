sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], (Controller, MessageBox, MessageToast) => {
    "use strict";

    return Controller.extend("ui5dialogsandvalidations.controller.View1", {
        onInit() {
        },

        onShowInfo: function () {
            MessageBox.information("Data is saved", {
                title: "Custom Info Dialog",
                actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        //add your extra logic
                        MessageToast.show("Ok Button Clicked")
                    } else {
                        MessageToast.show("Cancel Button Clicked")
                    }
                }
            });
        },
        onShowWarning: function () {
            MessageBox.warning("Do you really want to continue?", {
                title: "Custom Info Dialog",
                actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        //add your extra logic
                        MessageToast.show("Ok Button Clicked")
                    } else {
                        MessageToast.show("Cancel Button Clicked")
                    }
                }
            });
        },
        onShowSuccess: function () {
            MessageBox.success("Data is saved successfully !", {
                title: "Custom Info Dialog",
                actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                        //add your extra logic
                        MessageToast.show("Ok Button Clicked")
                    } else {
                        MessageToast.show("Cancel Button Clicked")
                    }
                }
            });
        },
        onShowError: function () {
            MessageBox.error("Data is not saved, please try again !!", {
                title: "Custom Error Dialog",
                actions: [MessageBox.Action.RETRY, MessageBox.Action.CANCEL],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.RETRY) {
                        //add your extra logic
                        MessageToast.show("Retry Button Clicked")
                    } else {
                        MessageToast.show("Cancel Button Clicked")
                    }
                }
            });
        },

        //validation 
        onValidate: function(oEvent){
            //here we will first identify the source event & based on that we will add validation logic

            let oInput = oEvent.getSource();
            let enteredValue = oInput.getValue();
            let id = oInput.getId();

            oInput.setValueState("None");

            //start with cvalidation logic

            //lets start with validation for name
            if(id.includes("inputName") && enteredValue === ""){
                //raise a validation error
                //MessageToast.show("Name can't be blank");
                oInput.setValueState("Error");
            }

            //add validation for mobile
            if(id.includes("inputMobile")){    
                let mobileNoPattern = /^[0-9]{10}$/;
                if(!mobileNoPattern.test(enteredValue)){
                    //raise a validation error
                    oInput.setValueState("Error");
                }
            }

            //add validation for CTC
            if(id.includes("inputCTC")){    
                if(isNaN(enteredValue)){
                    //raise a validation error
                    oInput.setValueState("Error");
                }
            }

            //add validation for Comment
            if(id.includes("inputComment")){    
                if(enteredValue.length < 6){
                    //raise a validation error
                    oInput.setValueState("Error");
                }
            }

        }
    });
});