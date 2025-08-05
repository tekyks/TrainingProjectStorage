const cds = require('@sap/cds');

class bookshop extends cds.ApplicationService {
  init() {
    //all the logic will come here

    this.on('READ', 'Books', function (req, next) {
      console.log('I am inside Book Read function');
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

    const doModification = function (data) {
      return data.map((data) => {
        //data.title += "!!!!!!!!!";
        if (data.title.toLowerCase().includes('work')) {
          data.category = 'Business Book';
        } else {
          data.category = 'Fiction Book';
        }
      });
    };

    this.after('READ', 'Books', function (data, req) {
      console.log('I am inside after impl of READ');
      console.log(data);
      doModification(data);
    });

    //unbound function
    this.on('getAllBooksTitle', function () {
      return 'List of Titles';
    });

    //decalre Books variable
    const Books = cds.entities('bookshop')['Books'];
    //1- unbound function
    this.on('totalStock', async function () {
      //get the total stock by fetching all the books
      //stock field and adding all
      //1- get all the books
      //2- get only stock field
      //3- do the summation of all the stocks
      //4- (optional) give alias name to computed column

      const result = await SELECT.one
        .columns('sum(stock) as totalstock')
        .from(Books);

      return result.totalstock;
    });

    //2- bound function
    //1- we will get stock and price from Book where Book Id should be passed value
    //2- once we get price and stock, we will multiply
    this.on('stockValue', 'Books', async function (request) {
      //console.log(request.params);
      const id = request.params[0];
      const result = await SELECT.one
        .columns('stock*price as stockValue')
        .from(Books).where`ID=${id}`;

      return result.stockValue;

      //return 77;
    });

    //3- Unbound Action
    this.on('submitBookOrder', async function (request) {
      const id = request.data.id;
      const stock = request.data.stock;
      const stockObject = await SELECT.columns('stock').from(Books, id);
      const currentStock = stockObject.stock;
      const updatedStock = currentStock - stock;
      await UPDATE(Books, id).with({
        stock: updatedStock,
      });

      return updatedStock;
    });

    //4- Bound Action
    //Set the price of a particular book
    this.on('setPrice', 'Books', async function (request) {
      //console.log(request.data);
      const id = request.params[0];
      const updatedPrice = request.data.price;
      //this will update Books with updated price
      await UPDATE(Books, id).with({
        price: updatedPrice,
      });

      return await SELECT.from(Books, id);
    });

    // this.after('each', 'Books', function(data,req){
    //     console.log("I am inside after impl of READ");
    //     console.log(data);
    // });

    return super.init();
  }
}

module.exports = { bookshop };
