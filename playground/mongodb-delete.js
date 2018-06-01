// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err) {
     return  console.log('Unable to connect to MongoDB servers');
    }
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((results) => {
    //     console.log(results);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((results) => {
    //     console.log(results);
    // });
    //findOneandDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((results) => {
    //     console.log(results);
    // })
    // db.collection('Users').deleteMany({name: 'Ojo David'}).then((results) => {
    //     console.log(results);
    // });
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b0b6a9cf0d4e73f34669e7f')}).then((results) => {
        console.log(results);
    });
    // db.close();
});