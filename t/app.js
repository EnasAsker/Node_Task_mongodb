
const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "task"

mongoClient.connect(connectionUrl, (error, res) =>{
    if(error){
        return  console.log('Error Occured')
    }
    console.log('Connection Done')
    const db = res.db(dbname)


    db.collection('users').insertOne({
        name: "Enas",
        age: 20
    })

    db.collection('users').insertOne({
        name: "Mariam",
        age: 23
    })

    db.collection('users').insertMany(
       [ 
        {
            name: "Foad",
            age: 25
        },
        {
            name: "Rania",
            age: 25
        },
        {
            name: "Mona",
            age: 25
        },
        {
            name: "Adel",
            age: 25
        },
        {
            name: "Ola",
            age: 25
        },
        {
            name: "Aya",
            age: 22
        },
        {
            name: "Sobhy",
            age: 54
        },
        {
            name: "Makram",
            age: 57
        },
        {
            name: "Hala",
            age: 34
        },
        {
            name: "Somaia",
            age: 44
        }], 
        (error, data)=>{
            if(error){
                console.log('Unable to insert data')
            }
                console.log(data.insertedCount)
        } 
    )

    db.collection("users").find({age: 25}).toArray((error, users)=>{
        if (error){
            console.log("No match");
        }
        console.log(users);
    })


    db.collection("users").find({age: 25}).limit(3).toArray((error, users)=>{
        if (error){
            console.log("No match");
        }
        console.log(users);
    })


    db.collection("users").updateOne(
        {__id:mongodb.ObjectId("64db9cace831cdd49aad3901")},
        {$set:{name: "Rahma"}}).then((data)=>{console.log(data.modifiedCount)
        }).catch((error)=>{console.log(error)})

    db.collection("users").updateOne(
        {__id:mongodb.ObjectId("64db9cace831cdd49aad3902")},
        {$set:{name: "Farida"}}).then((data)=>{console.log(data.modifiedCount)
        }).catch((error)=>{console.log(error)}) 
        
    db.collection("users").updateOne(
        {__id:mongodb.ObjectId("64db9cace831cdd49aad3903")},
        {$set:{name: "Hatem"}}).then((data)=>{console.log(data.modifiedCount)
        }).catch((error)=>{console.log(error)})
            
    db.collection("users").updateOne(
        {__id:mongodb.ObjectId("64db9cace831cdd49aad3904")},
        {$set:{name: "Ramez"}}).then((data)=>{console.log(data.modifiedCount)
        }).catch((error)=>{console.log(error)})        

    db.collection("users").updateOne(
        {__id:mongodb.ObjectId("64db9cace831cdd49aad3901")},
        {$inc: {age:20}}).then((data)=>{console.log(data.modifiedCount)
        }).catch((error)=>{console.log(error)})     

    db.collection("users").updateMany(
        {}, {$inc: {age: 10}}
    ).then((data)=>{console.log(data.modifiedCount)}).catch(
        (error)=>{console.log(error)}
    )    

    db.collection("users").deleteOne(
        {__id:mongodb.ObjectId("64db9cace831cdd49aad3901")},
        {$set:{name: "Ramez"}}).then((data)=>{console.log(data.deletedCountCount)
        }).catch((error)=>{console.log(error)})

    db.collection("users").deleteMany({age:35}).then((data)=>
    {console.log(data.deletedCount)}).catch((error)=>{console.log(error)})
//////////////////////////////////////////////////////////////////////////////
      

})

