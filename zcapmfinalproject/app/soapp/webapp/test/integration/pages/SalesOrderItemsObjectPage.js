sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'tekyks.ui.soapp',
            componentId: 'SalesOrderItemsObjectPage',
            contextPath: '/SalesOrderHeader/SOItems'
        },
        CustomPageDefinitions
    );
});