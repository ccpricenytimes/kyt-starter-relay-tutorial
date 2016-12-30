# kyt-starter-relay-tutorial
WIP - A relay tutorial built with kyt
This tutorial teaches the basics of routing, and querying data with Relay for a client side react app. This can also be used as boilerplate to build your own app.

## Setup
1. Install with kyt-cli
`kyt-cli setup -r https://github.com/ccpricenytimes/kyt-starter-relay-tutorial.git`

2. Access the github graphql API https://developer.github.com/early-access/graphql/
- optional: Follow the github instructions to set up GraphiQL locally (it makes visualizing queries a lot easier)

3. Export your Personal Access token in /tools/authToken.js
  Your file should look as follows:
  ```
  module.exports = "YOUR_ACCESS_TOKEN";
  ```
This file is set to be ignored by git so you don't accidentally commit the token.

4. Run `npm run dev`

5. Check `localhost:3001` and confirm that your user name is github appearing

6. Explore!
The source code contains explanations and ways to try things for yourself

More reading about Relay:
- (Thinking in Relay](https://facebook.github.io/relay/docs/thinking-in-relay.html#content)


Note about routing:
React router is a client side router. This means that you can't access routes directly. You must access them via links in your js.
To try out a new route, you can add one to the list of links in the [App component](/src/components/App/index.js)



## Overview
This app is a Relay tutorial. It uses the Github GQL API as its data source.
The root of the app is `/Client/index.js`

## Components
- Root - Setups up React router with react-router-relay
- App - Component used in every route. Includes list of links to routes
- Home - used by the index route. Includes welcome info and a simple user query
- Tools - used by /tools route. Does not use any Relay queries
- User - used by userId routes. Includes information about the user
  - Repo - a repository component. Included the User component

## Relay Glossary
- [RelayContainer](https://facebook.github.io/relay/docs/api-reference-relay-container.html#content) - A Relay Container is a higher order component that wraps every component fetching data with Relay.
- Fragment - Relay takes advantage of [GQL fragments](http://graphql.org/learn/queries/#fragments) to make their queries. Every Relay query takes a named fragment and returns that data to your component via props. You can reuse the Fragments created by your child components to create your query for the parent component. See the [User component](/src/components/User/index.js) for an example.
- [Relay.QL](https://facebook.github.io/relay/docs/api-reference-relay-ql.html#content) - Relay.QL is a way to tag ES6 template strings so the babel-relay-plugin can parse them at build time and make sure your queries adhere to the schema.

## Know your data
It's important to understand what your data looks like in GraphQL in order to be able to fetch it with Relay.
- Familiarize yourself with [how to query GraphQL](http://graphql.org/learn/queries/)
- Use [GraphiQL](https://github.com/graphql/graphiql) to look at the GQL implementation docs and test out queries.
