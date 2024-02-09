import { Elysia } from "elysia";
import webhookController from "./controllers/api/v1/webhookController";

const routesV1 = new Elysia()
    .get("/api/v1/webhook", webhookController);

export type RoutesV1 = typeof routesV1 

export {
    routesV1
}
