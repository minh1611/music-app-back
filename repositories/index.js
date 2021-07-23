const mongodb = require('mongodb')

const db = {}

const client = new mongodb.MongoClient("mongodb+srv://admin:admin123@cluster0.zjc74.mongodb.net/work_to_die?retryWrites=true&w=majority")
client.connect().then((connectedClient) => {
    console.log("Mongodb connected")
    const database = connectedClient.db("music")
    db.users = database.collection('users')
    db.songs = database.collection('songs')
})

module.exports = db