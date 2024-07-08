import express from'express';
const app = express()
const port = 3000

app.get('/', (req:Reques, res:Response) => {
  res.send('Hello World!')
})

