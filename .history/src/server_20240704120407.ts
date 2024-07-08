import config from "./app/config";

import mongoose from'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.database_url);

}


app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })