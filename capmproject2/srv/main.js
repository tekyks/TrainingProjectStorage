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
        return data.map(data => {
            //data.title += "!!!!!!!!!";
            if(data.title.toLowerCase().includes("work")){
                data.category = "Business Book";
            }else{
                data.category = "Fiction Book";
            }          
        })
    };


    this.after('READ', 'Books', function(data,req){
        console.log("I am inside after impl of READ");
        console.log(data);
        doModification(data);
    });

    //unbound function
    this.on('getAllBooksTitle',function(){
        return "List of Titles";
    });

    //decalre Books variable
    const Books = cds.entities('bookshop')['Books'];
    //1- unbound function
    this.on('totalStock',async function(){
        //get the total stock by fetching all the books 
        //stock field and adding all
        //1- get all the books
        //2- get only stock field
        //3- do the summation of all the stocks
        //4- (optional) give alias name to computed column

        const result = await SELECT.one.columns('sum(stock) as totalstock').from(Books);

        return result.totalstock;

    });


    //2- bound function



    //3- Unbound Action



    //4- Bound Action







    // this.after('each', 'Books', function(data,req){
    //     console.log("I am inside after impl of READ");
    //     console.log(data);
    // });

});