# Qook backend

## Commands

To run those please type `npm run <comandname>` or `yarn <comandname>` in terminal.

Available commands:

- `serve` - run application on port 8080

## Route loading

To add new route go to `./src/routes.ts` and add one to exported `RouteList` object.
It has to be an instance of `./src/Router/Route` so it needs four parameters:

- path to route (see <https://expressjs.com/en/guide/routing.html>),
- path to controller relative to `./src/controller`,
- controller's function name,
- Http methods that the given route needs to handle (see `./src/Router/enum/HttpMethods` to see available methods).
