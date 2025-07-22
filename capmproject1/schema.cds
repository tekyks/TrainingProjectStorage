using { cuid } from '@sap/cds/common';

// aspect customAspect{
//     location:String;
//     address:String;
// }

service bookshop{

    //managed
    entity Books:cuid {
        title: String;
        author: Association to Authors;
    }

    entity Authors:cuid{
        name: String;
    }
}