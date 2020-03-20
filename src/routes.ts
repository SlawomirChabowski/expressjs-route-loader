import { HttpMethod } from './Router/enum/HttpMethod';
import Route from './Router/Route';
import RouteList from './Router/RouteList';

export default new RouteList([
  new Route('/', 'DefaultController', 'index', [HttpMethod.get]),
]);
