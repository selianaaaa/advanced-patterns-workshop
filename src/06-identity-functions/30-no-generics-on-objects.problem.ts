/**
 * fetchers is an object where you can optionally
 * pass keys that match the route names.
 *
 * BUT - how do we prevent the user from passing
 * fetchers that don't exist in the routes array?
 *
 * We'll need to change this to a function which takes
 * in the config as an argument.
 *
 * Desired API:
 *
 * const config = makeConfigObj(config);
 */

const makeConfigObj = <TRoute extends string>(obj: {
  routes: TRoute[];
  fetchers: Record<TRoute, () => any>;
}) => {
  return obj;
};

export const configObj = makeConfigObj({
  routes: ['/', '/about', '/contact'],
  fetchers: {
    // @ts-expect-error
    '/does-not-exist': () => {
      return {};
    },
  },
});
