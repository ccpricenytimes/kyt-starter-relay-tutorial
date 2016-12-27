
import React from 'react';
import Route from 'react-router/lib/Route';
import Relay from 'react-relay';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';

// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const importHome = (nextState, cb) => {
  System.import('../components/Home')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importTools = (nextState, cb) => {
  System.import('../components/Tools')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importUser = (nextState, cb) => {
  System.import('../components/User')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const userLogin = 'coolov';
// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
// Routes contain the root queries for Relay
// "Queries supplied at the root should contain exactly one fragment and no fields."
const routes = (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={importHome}
      queries={{ user: () => Relay.QL`query { viewer }` }}
    />
    <Route
      path="tools"
      getComponent={importTools}
    />
    <Route
      path=":userId"
      getComponent={importUser}
      getQueries={() => ({ user: () => Relay.QL`query { user(login: $userId) }` })}
    />
  </Route>
);

// // Unfortunately, HMR breaks when we dynamically resolve
// // routes so we need to require them here as a workaround.
// // https://github.com/gaearon/react-hot-loader/issues/288
// if (module.hot) {
//   require('../components/Home');    // eslint-disable-line global-require
//   require('../components/Tools');   // eslint-disable-line global-require
//   require('../components/User');   // eslint-disable-line global-require
// }

export default routes;
