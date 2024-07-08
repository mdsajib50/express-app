import config from "./app/config";

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}


app.listen(config.p, () => {
    console.log(`Example app listening on port ${port}`)
  })