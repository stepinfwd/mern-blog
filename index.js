const express = require('express')
const connect=require("./config/db.js")
const router=require("./routes/userRouter.js")


require('dotenv').config()
const app = express()
app.use(express.json());
// app.use(cors());

const port = process.env.PORT
// connect to mongodb database
connect();

app.use('/',router)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})