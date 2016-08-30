var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8060, function(){
    console.log('Server running on 8060...');
});