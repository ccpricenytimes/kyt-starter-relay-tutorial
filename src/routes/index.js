
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
// The :userId route uses getQueries because the query depends on data from the route.
// This means the query will rerun every time the route is accessed.
// https://github.com/relay-tools/react-router-relay#routes-and-queries
export default routes;
