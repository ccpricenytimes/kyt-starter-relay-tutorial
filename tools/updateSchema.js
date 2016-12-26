const fetch = require('node-fetch');
const fs = require('fs');
const token = require('./authToken');
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');
const path = require('path');

const schemaPath = path.join(process.cwd(), 'schema');

const SERVER = 'https://api.github.com/graphql';

// Save JSON of full schema introspection for Babel Relay Plugin to use
fetch(`${SERVER}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ query: introspectionQuery }),
})
.then(res => res.json())
.catch((err) => {
  console.log('ERR', err);
})
.then((schemaJSON) => {
  fs.writeFileSync(
    `${schemaPath}.json`,
    JSON.stringify(schemaJSON, null, 2)
  );

  // Save user readable type system shorthand of schema
  const graphQLSchema = buildClientSchema(schemaJSON.data);
  fs.writeFileSync(
    `${schemaPath}.graphql`,
    printSchema(graphQLSchema)
  );
})
.catch((err) => {
  console.log('Err', err);
});
