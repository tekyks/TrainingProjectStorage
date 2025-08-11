using SalesOrderService as service from '../../srv/so_srv';
using from '../../db/so';

annotate service.SalesOrderHeader with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrderDesc',
                Value : SalesOrderDesc,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Customer',
                Value : Customer,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CustomerNo',
                Value : CustomerNo,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrderDate',
                Value : SalesOrderDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrderTotal',
                Value : SalesOrderTotal,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Sales Order Items',
            ID : 'SalesOrderItems',
            Target : 'SOItems/@UI.LineItem#SalesOrderItems',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrderDesc',
            Value : SalesOrderDesc,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Customer',
            Value : Customer,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CustomerNo',
            Value : CustomerNo,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrderDate',
            Value : SalesOrderDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrderTotal',
            Value : SalesOrderTotal,
        },
    ],
);

annotate service.SalesOrderItems with @(
    UI.LineItem #SalesOrderItems : [
        {
            $Type : 'UI.DataField',
            Value : ProductId,
            Label : 'ProductId',
        },
        {
            $Type : 'UI.DataField',
            Value : ProductName,
            Label : 'ProductName',
        },
        {
            $Type : 'UI.DataField',
            Value : Quantity,
            Label : 'Quantity',
        },
        {
            $Type : 'UI.DataField',
            Value : UnitPrice,
            Label : 'UnitPrice',
        },
        {
            $Type : 'UI.DataField',
            Value : UnitTotal,
            Label : 'UnitTotal',
        },
    ]
);

