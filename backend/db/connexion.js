const { MongoClient } = require('mongodb')
const uri = 'mongodb://root:password@mongo:27017';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    connectToServer: function(callback) {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err);
            }
            dbConnection = db.db('dev')

            return callback();
        });
    },

    getDb: function() {
        return dbConnection;
    },
};