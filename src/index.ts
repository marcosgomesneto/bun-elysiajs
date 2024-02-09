import { Elysia, t } from 'elysia'
import { routesV1 } from './routes'

const app = new Elysia()
    .use(routesV1)
    .listen(3000)

export type App = typeof app 