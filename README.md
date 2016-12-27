# kyt-starter-relay-tutorial
WIP - A relay tutorial built with kyt

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


Note about routing:
React router is a client side router. This means that you can't access routes directly. You must access them via links in your js.
To try out a new route, you can add one to the list of links in the [App component](/src/components/App/index.js)
