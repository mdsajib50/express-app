import express, { Application, Request, Response } from'express';
const app:Application = express()
const port = 3000

app.use(express.json())
ap

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;