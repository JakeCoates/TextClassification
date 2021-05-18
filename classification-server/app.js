const express = require("express");
const cors = require("cors");


const app = new express();

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());


var port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// for local
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
