using SalesOrderService as service from '../../srv/so_srv';
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

