sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "techyks/ui5modelproject/model/formatter",
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("techyks.ui5modelproject.controller.View1", {

        fomatter:formatter,

        //Life cycle event - 1
        onInit() {
            
            //alert("I am inside onInit() event");

            //step 1- lets create some demo/dummy data - employee
            let jsonEmployeeData = {
                employee: {
                    id: '1001',
                    name: 'Joe Root',
                    designation: 'Manager',
                    department: 'IT',
                    address:{
                        streetno:1234,
                        zipcode:22222,
                        city:'Bangalore'
                    }
                }      
            };


            //step 2- lets create a JSONModel which will hold employee data
            //let jEmpModel = new sap.ui.model.json.JSONModel(jsonEmployeeData);
            let jEmpModel = new JSONModel(jsonEmployeeData);

            
            //step 3 - lets conenct created json model to our View - View1
            //To make this Oneway forecfully
            //jEmpModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            this.getView().setModel(jEmpModel); //default model
            

            //--------------------------------

            let jsonStudentData = {
                student: {
                    id: '10',
                    name: 'Danis Lilly',
                    class: '8',
                    section: 'A',
                }      
            };
            let jStudentModel = new JSONModel(jsonStudentData);
            //this.getView().setModel(jStudentModel, "studentmodel"); //named model 
            //it means we are going to assign this named model at component (global/parent) level
            this.getOwnerComponent().setModel(jStudentModel, "studentmodel"); //named model 
        },

        //formatter for my CTC calculation
        // getCTC: function (salary){
        //     return salary * 12 + salary/10;
        // }

        // //Life cycle event - 2
        // onBeforeRendering: function(){
        //     alert("I am inside onBeforeRendering event");
        // },

        // //Life cycle event -3
        // onAfterRendering: function(){
        //     alert("I am inside onAfterRendering event");
        // },

        // //Life cycle event -4
        // onExit: function(){
        //     alert("I am inside onExit event");
        //}
    });
});