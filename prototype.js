
// This is your prototyping file.
// It is the entry for the webpack dev server
// when you run the kyt proto command.
import React from 'react';
import ReactDom from 'react-dom';
import Relay from 'react-relay';
import token from './tools/authToken';

// Import your component here for easy development
import Home from './src/components/Home';

// Sets up Relay Environment for Github GQL server
const environment = new Relay.Environment();
environment.injectNetworkLayer(
new Relay.DefaultNetworkLayer('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
);

// Change this query to be the top level query for the component you're working with
const protoQuery = {
  queries: { user: () => Relay.QL`query { viewer }` },
  params: {},
  name: 'PrototypeRoute',
};

// Attach the component to the root.
// Relay Renderer performs the Relay query
// Read more here: https://facebook.github.io/relay/docs/api-reference-relay-renderer.html#content
const rootEl = document.getElementById('root');
ReactDom.render(
  <Relay.Renderer
    Container={Home}
    queryConfig={protoQuery}
    environment={environment}
  />,
  rootEl
);
