using org from '../db/schema';

extend org.tekyks.Books with {
    virtual category: String;
}

//@impl:'srv/main2.js'
service bookshop {
    entity Books   as projection on org.tekyks.Books;
    entity Authors as projection on org.tekyks.Authors;
    entity Orders  as projection on org.tekyks.Orders;
}


