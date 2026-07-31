export type Route = 'home' | 'experience' | 'projects' | 'writing' | 'contact';

const ROUTES: Route[] = ['experience', 'projects', 'writing', 'contact'];

export function routeFromHash(): Route {
  const hash = (window.location.hash || '').replace(/^#\/?/, '');
  return (ROUTES as string[]).includes(hash) ? (hash as Route) : 'home';
}
