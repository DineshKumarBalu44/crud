use('user');

db.RecordsDB.insertOne({
    name: "dinesh",
    age: "6",
    dept: "it",
})

db.RecordsDB.insertMany([{
    name: "bhuvi",
    age: "6",
    dept: "it"},
    {name: "akash",
    age: "6",
    dept: "it",
},{   name: "aswin",
age: "6",
dept: "it",
}]
)

db.RecordsDB.find()

db.RecordsDB.find({"age":"6"})

db.RecordsDB.updateMany({name:"aswin"}, {$set: {age: "5"}})

db.RecordsDB.find()

db.RecordsDB.deleteOne({name:"aswin"})

db.RecordsDB.find()

