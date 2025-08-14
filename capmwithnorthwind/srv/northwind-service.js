const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const service = await cds.connect.to('Northwind');
    this.on('READ', 'Products', function(request){
        return service.run(request.query);
    });

});