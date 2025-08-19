sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("techyks.ui5modelproject.controller.View1", {
        onInit() {
            //step 1- lets create some demo/dummy data - employee
            let jsonEmployeeData = {
                employee: {
                    id: '1001',
                    name: 'Harry Brook',
                    designation: 'Manager',
                    department: 'IT'
                }      
            };


            //step 2- lets create a JSONModel which will hold employee data
            //let jEmpModel = new sap.ui.model.json.JSONModel(jsonEmployeeData);
            let jEmpModel = new JSONModel(jsonEmployeeData);

            
            //step 3 - lets conenct created json model to our View - View1
            this.getView().setModel(jEmpModel); //default model
            //this.getView().setModel(jEmpModel,"empmodel"); //named model
        }
    });
});