import Express from 'express';
import IMethodSpecificRouteContainer from './Router/interface/IMethodSpecificRouteContainer';
import Routes from './routes';

const app = Express();
const routeGetters: IMethodSpecificRouteContainer[] = [
  { method: 'all', routes: Routes.all },
  { method: 'delete', routes: Routes.delete },
  { method: 'get', routes: Routes.get },
  { method: 'post', routes: Routes.post },
  { method: 'put', routes: Routes.put },
];

for (const routes of routeGetters) {
  for (const route of routes.routes) {
    const { path, controller, method } = route;

    (app as any)[routes.method](
      route.path,
      (req: CallableFunction, res: any) => import(`./controller/${controller}`)
        .then(ctrlr => {
          res.set({ 'Content-Type': 'application/json' });

          return ctrlr[method](req, res);
        })
        .catch((err: Error) => {
          res.status(500).send({ msg: 'Internal server error' });
          // tslint:disable-next-line: no-console
          console.error(err);
        }),
    );
  }
}

app.listen(8080);
