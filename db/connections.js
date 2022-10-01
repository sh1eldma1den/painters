module.exports = function (uri, mc) {
    const client = new mc.MongoClient(uri);

    const db = client.db('project2');

    return [db, mc.ObjectId];
};