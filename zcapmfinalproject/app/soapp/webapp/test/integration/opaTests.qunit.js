sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tekyks/ui/soapp/test/integration/FirstJourney',
		'tekyks/ui/soapp/test/integration/pages/SalesOrderHeaderList',
		'tekyks/ui/soapp/test/integration/pages/SalesOrderHeaderObjectPage',
		'tekyks/ui/soapp/test/integration/pages/SalesOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderHeaderList, SalesOrderHeaderObjectPage, SalesOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tekyks/ui/soapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrderHeaderList: SalesOrderHeaderList,
					onTheSalesOrderHeaderObjectPage: SalesOrderHeaderObjectPage,
					onTheSalesOrderItemsObjectPage: SalesOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);