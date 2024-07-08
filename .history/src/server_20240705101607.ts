import config from "./app/config";

import mongoose from 'mongoose';

import ap from "module";
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })
}


