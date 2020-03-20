import { HttpMethod } from './enum/HttpMethod';
import Route from './Route';

export default class RouteList {
  private _all: Route[] = [];
  private _delete: Route[] = [];
  private _get: Route[] = [];
  private _post: Route[] = [];
  private _put: Route[] = [];

  constructor(initialRoutes: Route[]) {
    for (const route of initialRoutes) {
      this.addRoute(route);
    }
  }

  /**
   * Adds given route to the RouteList to proper Http method
   * @param {Route} route
   */
  public addRoute(route: Route) {
    route.httpMethods.forEach(httpMethod => {
      const {
        all: _all,
        delete: _delete,
        get: _get,
        post: _post,
        put: _put,
      } = HttpMethod;
      let pushTo: Route[];

      switch (httpMethod) {
        case _delete:
          pushTo = this._delete;
          break;
        case _get:
          pushTo = this._get;
          break;
        case _post:
          pushTo = this._post;
          break;
        case _put:
          pushTo = this._put;
        case _all:
        default:
          pushTo = this._all;
          break;
      }

      pushTo.push(route);
    });
  }

  public get all(): Route[] {
    return this._all;
  }

  public get delete(): Route[] {
    return this._delete;
  }

  public get get(): Route[] {
    return this._get;
  }

  public get post(): Route[] {
    return this._post;
  }

  public get put(): Route[] {
    return this._put;
  }
}
