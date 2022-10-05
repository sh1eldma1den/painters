module.exports = function (uri, mc) {
    const client = new mc.MongoClient(uri);

    const db = client.db('directory');

    if (!db) {
        console.log('Error connecting to the database.')
    } else {
        console.log('Connected to database and listening on ${PORT}.');
    }
    return [db, mc.ObjectId];

};