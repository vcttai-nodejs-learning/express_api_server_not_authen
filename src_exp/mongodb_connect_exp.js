const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const db_url = 'mongodb://localhost:27017';
const db_name = 'test_new_db';
const db_collection_name = 'company_info';

MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected to server successfully!");

    const db = client.db(db_name);
    insertNewDocument(db, db_collection_name);

    client.close();
})

const insertNewDocument = (db, db_collection_name) => {
    var new_obj = { name: "Company Inc", address: "Highway " + Date.now(), time: Date.now() };

    db.collection(db_collection_name).insertOne(new_obj, (err, res) => {
        if (err) throw err;

        console.log("new 1 document inserted");
    });
}