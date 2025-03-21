import fastify from "fastify";
import config from "./config.js";
import connect from "./connect.js";
import addRouteHandlers from "./handlers/index.js";

const app = fastify({ logger: true });

addRouteHandlers(app);

try {
    await connect();
    await app.listen({ port: config.port });
} 
catch (error) {
    app.log.error(error);
    process.exit(1);
}