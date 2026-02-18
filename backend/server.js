const jsonServer = require("json-server");
const cors = require("core");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

// Enable CORS
server.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log("JSON Server is Running");
});