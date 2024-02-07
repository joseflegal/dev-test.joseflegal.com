const { cloneDeep } = require("lodash");
const fs = require("fs");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const lodashId = require("lodash-id");

const seedDB = "db/seed.json";
const devDB = "db/dev.json";
const testDB = "db/test.json";

console.log(seedDB);

const localDB = process.env.NODE_ENV === "test" ? testDB : devDB;

if (!fs.existsSync(localDB)) {
  console.log("Building DB from seed....");
  fs.writeFileSync(localDB, fs.readFileSync(seedDB));
}

const adapter = new FileSync(localDB);
const db = low(adapter);

db._.mixin(lodashId);

let seedDBJSON = null;
db.resetToSeed = () => {
  if (!seedDBJSON) seedDBJSON = JSON.parse(fs.readFileSync(seedDB));
  db.setState(cloneDeep(seedDBJSON));
};

module.exports = db;
