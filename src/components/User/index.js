
import React from 'react';
import Relay from 'react-relay';
import Repository from '../Repository';

/* eslint-disable react/prop-types */
const RepoList = props => (
  <ul>
    {props.repos.edges.map(({ node }, index) => (
      <li key={index}>
        <Repository repo={node} />
      </li>
    ))
    }
  </ul>
);

function User(props) {
  return (
    <div>
      <h1> {props.user.name} stats:</h1>
      <p>This user has starred
        <span> {props.user.starredRepositories.totalCount.toString()} </span>
         repositories
      </p>
      <RepoList repos={props.user.starredRepositories} />
    </div>
  );
}
// Our Relay queries must contain all data needed by our component
// and any of our child components. Since child components define their
// fragments we can use those rather than rewriting that part of the query.
// First we request the data we need for our component (the user name).
// Then we use the Repository 'Repo' fragment to define the data we want
// from the starred repository list.
export default Relay.createContainer(User, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name
        starredRepositories(last: 10) {
          totalCount
          edges {
            node {
              ${Repository.getFragment('repo')}
            }
          }
        }
      }
    `,
  },
});
// TRYIT: Try it yourself
// Request a list of the user's Repositories rather than their starredRepositories
