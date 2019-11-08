import { AuthorizeRouteMiddleware } from './authorize-route.middleware';

describe('AuthorizeRouteMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthorizeRouteMiddleware()).toBeDefined();
  });
});
