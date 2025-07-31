//console.log("I am inside JS File");

// module.exports = function(){
//     console.log("I am inside anonymous function");
// };

const cds = require('@sap/cds');
module.exports = cds.service.impl(function(){
    //console.log("I am inside cds service impl function");
    // this.on('READ','Books',function(){
    //     console.log("I am inside Book Read function");
    // });

    this.on('READ','Books',function(req,next){
        console.log("I am inside Book Read function");
        //console.log(req);
        //next() method will do further operations
        return next();
        // return[
        //     {
        //         ID:cds.utils.uuid(),
        //         title:'This is Custom Title',
        //         author_ID: '2'
        //     },
        //     {
        //         ID:cds.utils.uuid(),
        //         title:'This is Custom Title 2',
        //         author_ID: '3'
        //     }
        // ];
    });

    const doModification = function(data){
        for(let i = 0; i<data.length; i++){
            data[i].title = data[i].title + "!!!!!!!!!!!!!";
            data[i].category = 'new category field';
        }
    };


    this.after('READ', 'Books', function(data,req){
        console.log("I am inside after impl of READ");
        console.log(data);
        doModification(data);
    });



    // this.after('each', 'Books', function(data,req){
    //     console.log("I am inside after impl of READ");
    //     console.log(data);
    // });

});