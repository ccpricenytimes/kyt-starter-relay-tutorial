
import React from 'react';
import Relay from 'react-relay';
import Repository from '../Repository';

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
  console.log(props.user.starredRepositories);
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
