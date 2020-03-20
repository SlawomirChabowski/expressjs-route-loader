import Route from '../Route';

export default interface IMethodSpecificRouteContainer {
    method: string;
    routes: Route[];
}
