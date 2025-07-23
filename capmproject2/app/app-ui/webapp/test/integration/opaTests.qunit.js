sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'org/tekyks/ui/appui/test/integration/FirstJourney',
		'org/tekyks/ui/appui/test/integration/pages/OrdersList',
		'org/tekyks/ui/appui/test/integration/pages/OrdersObjectPage',
		'org/tekyks/ui/appui/test/integration/pages/OrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage, OrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('org/tekyks/ui/appui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage,
					onTheOrderItemsObjectPage: OrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);