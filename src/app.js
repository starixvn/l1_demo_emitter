import express from "express";
import http from "http";
import { initEmitter } from "./emitter";

import appConfigs from "./app-configs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || appConfigs.hostingPort);

const httpServer = http.createServer(app);

httpServer.listen(app.get("port"), async () => {
    console.log(`Express server started and running on port ${app.get("port")}!`);
});
app.get("/", (req, res, next) => {
    res.send("I'm Emitter Service !");
});

const initServer = async (httpServer) => {
    initEmitter(appConfigs.defaultEvent);
};

initServer(httpServer);
