const app = require('./app.js')
const dotenv = require('dotenv')
//setting up config file 
dotenv.config({ path: "./config/.env" })


const port = process.env.PORT || 3333
const server = app.listen(port, () => {
    console.log(`Server is listening to port localhost:${port}`);
    console.log(`Server Link http://localhost:${process.env.PORT} `);
})
