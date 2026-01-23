const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data } = require("./seedListings");

mongoose.connect("mongodb://127.0.0.1:27017/staynest");

async function seedDB() {
  await Listing.deleteMany({});
  const mappedData = data.map((obj) => ({
    ...obj,
    owner: "6972148e5cc8b57d4e3a611e",
  }));
  await Listing.insertMany(mappedData);
  console.log("🔥 Database seeded with listings!");
  mongoose.connection.close();
}

seedDB();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";
// main()
//   .then(() => {
//     console.log("connecting to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "6972148e5cc8b57d4e3a611e",
//   }));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();
