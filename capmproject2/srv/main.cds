using org from '../db/schema';

extend org.tekyks.Books with {
    virtual category : String;
}

//@impl:'srv/main2.js'
service bookshop {
    // entity Books   as
    //     select from org.tekyks.Books
    //     where
    //         title = 'Deep Work';


    //entity Books   as projection on org.tekyks.Books;
    entity Books   as projection on org.tekyks.Books
        actions {
            //bound function
            function stockValue()              returns Integer;
            //bound action
            action   setPrice(price : Integer) returns Books;
        };


    entity Authors as projection on org.tekyks.Authors;
    entity Orders  as projection on org.tekyks.Orders;
    //unbound function
    function getAllBooksTitle()                          returns String;
    //unbound function
    function totalStock()                                returns Integer;
    //unbound action
    action   submitBookOrder(id : UUID, stock : Integer) returns Integer;
}
