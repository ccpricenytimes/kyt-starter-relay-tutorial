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
