const express = require("express");
const app = express();
const adminRouter =require('routes/admin')
const cors = require('cors')


app.use(cors())
app.use(express.json());


app.use('/admin', adminRouter)


app.listen(3000, () => console.log("Server running on port 3000"));