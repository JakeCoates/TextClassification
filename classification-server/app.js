const express = require("express");
const cors = require("cors");

var classifyRouter = require("./routes/classify");

const app = new express();
const expressSwagger = require('express-swagger-generator')(app);

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());


var port = 8000;

app.use("/classify", classifyRouter);

app.get('/', (req, res) => {
    res.send('Welcome to text classification!')
})


/**
 * Swagger
 */
 let options = {
    swaggerDefinition: {
        info: {
            description: 'Text classification server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: `localhost:${port}`,
        basePath: '',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
		securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};

expressSwagger(options)

// for local
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
