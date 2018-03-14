'use strict';

var routes = require('next-routes')();
routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', 'campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBLE9BQ0csQUFESCxJQUNPLEFBRFAsa0JBQzBCLEFBRDFCLGlCQUVHLEFBRkgsSUFFTyxBQUZQLHVCQUUrQixBQUYvQixrQkFHRyxBQUhILElBR08sQUFIUCxnQ0FHdUMsQUFIdkMsNEJBSUcsQUFKSCxJQUlPLEFBSlAsb0NBSTBDLEFBSjFDO0FBS0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9EIERyaXZlL0Jsb2NrY2hhaW4vdWRlbXktZXRoZXJldW0vY2FtcGFpZ24ta2lja3N0YXJ0ZXIifQ==