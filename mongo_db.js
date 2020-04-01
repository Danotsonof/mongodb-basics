var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/danotsonof';

mongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    
if (err) throw err;

db.createCollection( 'interns',
    {
    }, console.log('Database created by Danotsonof')
 )

db.close();

});