const app = require('express')();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({dev})
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./.env.local" });
const connectDb = require("./utilsServer/connectDb");
connectDb();
app.use(require("express").json()); // for parsing application/json (body parser)
const PORT = process.env.PORT || 3000;



nextApp.prepare().then(() => {
    app.use('/api/category', require('./api/category'))
    app.use('/api/employer', require('./api/employer'))

    app.all("*", (req, res) => handle(req, res));
    
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`Express server running on ${PORT}`);
    });
    }
);