import express from "express";
import compression from "compression";
import "reflect-metadata";
import helmet from "helmet";

import {
  useExpressServer,
  RoutingControllersOptions,
} from "routing-controllers";
import Controllers from "./controllers";

const routingControllersOptions: RoutingControllersOptions = {
  cors: true,
  controllers: Controllers,
  routePrefix: "/api",
  defaultErrorHandler: false,
};

// Create Express server
const app: express.Express = express();

// TODO: Include env files
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(helmet());

useExpressServer(app, routingControllersOptions);

export default app;
