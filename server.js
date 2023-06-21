const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/DbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()) // pass the data stream / data parse
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use(errorHandler) // custom middleware : Accept req and response and transformed into json format

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})