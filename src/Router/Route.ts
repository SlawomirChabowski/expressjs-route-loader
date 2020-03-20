import { HttpMethod } from './enum/HttpMethod';

export default class Route {
  private _path: string;
  private _controller: string;
  private _method: string;
  private _httpMethods: HttpMethod[];

  constructor(path: string, controller: string, method: string, httpMethods: HttpMethod[]) {
    this._path = path;
    this._controller = controller;
    this._method = method;
    this._httpMethods = httpMethods;
  }

  public get path(): string {
    return this._path;
  }

  public get controller(): string {
    return this._controller;
  }

  public get method(): string {
    return this._method;
  }

  public get httpMethods(): HttpMethod[] {
    return this._httpMethods;
  }
}
