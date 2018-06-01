// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err) {
     return  console.log('Unable to connect to MongoDB servers');
    }

    console.log('Connected to database servers');

    // db.collection('Todos').insertOne({
    //     text: 'Read my books',
    //     completed: 'false'
    // },(err, result) => {
    //     if(err){
    //         return console.log('Something went wrong with uploading collection', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Ojo David',
    //     age: 16,
    //     location:'Osun'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to create collection', err)
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});