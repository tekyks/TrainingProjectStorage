using bookshop as service from '../../srv/main';
using from '../../db/schema';

annotate service.Orders with @(
    UI.SelectionFields:[ID,customer],

    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'customer',
                Value : customer,
            }
        ],
    },

    UI.FieldGroup #GeneratedGroup2 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Order ID',
                Value : ID,
            },
        ],
    },


    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Customer Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet2',
            Label : 'ID Data',
            Target : '@UI.FieldGroup#GeneratedGroup2',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Order Items',
            ID : 'OrderItems',
            Target : 'Items/@UI.LineItem#OrderItems',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Order ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Customer',
            Value : customer,
        }  
    ],
);

annotate service.OrderItems with @(
    UI.LineItem #OrderItems : [
        {
            $Type : 'UI.DataField',
            Value : parent.Items.position,
            Label : 'position',
        },
        {
            $Type : 'UI.DataField',
            Value : parent.Items.quanity,
            Label : 'quanity',
        },
        {
            $Type : 'UI.DataField',
            Value : parent.Items.parent_ID,
            Label : 'parent_ID',
        },
    ]
);

