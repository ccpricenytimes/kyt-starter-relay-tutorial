
import React from 'react';
import Relay from 'react-relay';
import styles from './styles.scss';

/* eslint-disable react/prop-types */
function Repository(props) {
  return (
    <div>
      <h3 className={styles.heading}>
        <a href={props.repo.url}>{props.repo.name} </a>
      </h3>
    </div>
  );
}


// TRYIT: Try it yourself
// Try adding the repository description to the component
// Hint: first find it in the GraphiQL docs so you know its format
// This fragment can be reused by any parent component to define the data for its query
// See the User component for an example.
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
