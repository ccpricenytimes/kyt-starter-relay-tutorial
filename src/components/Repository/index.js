
import React from 'react';
import Relay from 'react-relay';

function Repository(props) {
  return (
    <div>
      <h3>
        <a href={props.repo.url}>{props.repo.name} </a>
      </h3>
    </div>
  );
}


// TODO: Try it yourself
// Try adding the repository description to the component
// Hint: first find it in the GraphiQL docs so you know its format
export default Relay.createContainer(Repository, {
  fragments: {
    repo: () => Relay.QL`
      fragment on Repository {
        name
        url
      }
    `,
  },
});
