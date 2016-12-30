
import React from 'react';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import { applyRouterMiddleware, Router } from 'react-router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';
import token from '../../tools/authToken';

// Setting up Relay to request its data from the Github GQL API
// instructions for different setups here https://facebook.github.io/relay/docs/guides-network-layer.html#content
const environment = new Relay.Environment();
environment.injectNetworkLayer(
new Relay.DefaultNetworkLayer('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
);

function Root() {
  // Setting up React Router and react-router-relay
  return (
    <Router
      history={browserHistory}
      // hack for Webpack 2
      // see https://github.com/relay-tools/react-router-relay/issues/192
      // React Router Relay connects React Router with Relay data fetching
      render={applyRouterMiddleware(useRelay.default || useRelay)}
      environment={environment}
      // See the routes file to take a look at the Relay root queries
      routes={routes}
    />
  );
}

export default Root;
