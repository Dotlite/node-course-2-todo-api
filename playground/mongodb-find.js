// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err) {
     return  console.log('Unable to connect to MongoDB servers');
    }

    console.log('Connected to database servers');
    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to find todos');
    // })

    // db.collection('Users').find({_id: new ObjectID('5b0b6ae96bae3e0644162111')}).toArray().then((docs) =>{
    //     console.log('Users');
    //     console.log(JSON.stringify(docs[0].name, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch rows');
    // });
    // db.collection('Users').find().count().then((count) =>{
    //     console.log(`Users count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch rows');
    // });

    db.collection('Users').find({name:'Ojo David'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch rows');
    });

    // db.close();
});