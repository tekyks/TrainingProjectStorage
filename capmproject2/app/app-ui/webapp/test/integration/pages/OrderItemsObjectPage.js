sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'org.tekyks.ui.appui',
            componentId: 'OrderItemsObjectPage',
            contextPath: '/Orders/Items'
        },
        CustomPageDefinitions
    );
});