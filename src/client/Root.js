
import React from 'react';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import { applyRouterMiddleware, Router } from 'react-router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';
import token from '../../tools/authToken';

const environment = new Relay.Environment();
environment.injectNetworkLayer(
new Relay.DefaultNetworkLayer('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
);

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Router history={browserHistory}
      // hack for Webpack 2
      // see https://github.com/relay-tools/react-router-relay/issues/192
      render={applyRouterMiddleware(useRelay.default || useRelay)}
      environment={environment}
      routes={routes}
    />
  );
}

export default Root;
