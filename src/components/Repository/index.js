
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
