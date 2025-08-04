namespace org.tekyks;

using {cuid} from '@sap/cds/common';

//managed
entity Books : cuid {
    title  : String;
    stock: Integer;
    price: Integer;
    author : Association to Authors;
}

entity Authors : cuid {
    name : String;
    book : Association to many Books
               on book.author = $self;
}

//Composition
entity Orders : cuid {
    customer : String;
    Items    : Composition of many OrderItems
                   on Items.parent = $self;
}

entity OrderItems {
    key parent   : Association to Orders;
    key position : Integer;
        quanity  : Integer;
}


//unmanged
// entity Books:cuid {
//     title: String;
//     author_fk: type of Authors:ID;
//     link_to_author: Association to Authors on link_to_author.ID = author_fk;
// }
