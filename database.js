const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://shubhiagrawal3:5727856$hU@nodeproject.rhdhv5u.mongodb.net/";

const client = new MongoClient(url);

const dbName = "TestDatabase";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //insert data

  const data = {
    firstName: "Jude",
    lastName: "Duarte",
    city: "Fairy",
    phoneNumber: "8899770066",
  };
  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted documents =>", insertResult);

  // update the data
  const updateResult = await collection.updateOne(
    { firstName: "Carden" },
    { $set: { lastName: "Greenbriar" } }
  );
  console.log("Updated documents =>", updateResult);

  // delete the data
  const deleteResult = await collection.deleteOne({
    city: "basgiath",
  });
  console.log("Deleted documents =>", deleteResult);

  //Read the data
  const findResult = await collection.find({}).toArray(); // {} means all the data and convert to array
  console.log("Found documents =>", findResult);

  const countDocuments = await collection.countDocuments({});
  console.log("Count of documents =>", countDocuments);

  return "Done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// go to mongo website
// create cluster
// create user
// get connection string
// download atlas and establish connection
// create database
// install mongodb package
// create connection from code
// crud
