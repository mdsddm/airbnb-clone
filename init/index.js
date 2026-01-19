const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";
main()
  .then(() => {
    console.log("connecting to db");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "696b94e0d7e6eacfdfe4ebcd",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
