import express from'express';
const app = express()
const port = 3000

app.get('/', (req:Reque, res:Response) => {
  res.send('Hello World!')
})

