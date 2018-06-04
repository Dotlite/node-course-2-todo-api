// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err) {
     return  console.log('Unable to connect to MongoDB servers');
    }

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b1147fb9c487a8fefff26c3')
    // },{
    //     $set: {
    //         completed: true
    //     }        
    // }, {    
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b0b68bf84eef51984592993')
    }, {
       $set : {
        name: 'David'
       },
       $inc : {
        age: 1
       }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    // db.close();
});