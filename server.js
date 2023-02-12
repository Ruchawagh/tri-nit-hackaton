const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 8000;

require('dotenv').config()


app.use(cors())
app.use(express.json())

app.use('/api/farmer',require('./routes/farmer'))
app.use('/api/gardener',require('./routes/gardener'))
app.use('/api/blogs',require('./routes/blogs'))

app.listen(8000,()=>{
    console.log(`App listening at ${PORT}`);
})

