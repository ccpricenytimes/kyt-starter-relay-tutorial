
import React from 'react';
import Relay from 'react-relay';
import styles from './styles.scss';

// We disable PropTypes for Relay Components because
// Relay is doing type validation for us
/* eslint-disable react/prop-types */
function Home(props) {
  // We use the Relay data by accessing it through props
  // Its returned as an object named the same as
  // the fragment from our query
  // fragments: {user:} --> props.user
  // eg. props.user.login
  return (
    <section>
      <h2 className={styles.heading}> Welcome {props.user.login} </h2>
      <p className={styles.paragraph}>
        This is the kyt Relay tutorial.
        This serves as a tutorial and a base for a client side app
        that uses Relay for data fetching.
      </p>
      <ul className={styles.list}>
        <li>
          <p className={styles.paragraph}>
            Check out the Tools section for an outline of the libraries that
            are used in this starter-kyt.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Search the project code for <strong>TRYIT</strong> to find activities.
          </p>
        </li>
      </ul>
    </section>
  );
}

// A Relay Container component wraps any component
// that wants to fetch data with Relay
// Here we create a container and pass it our Home component
// Then we define the Relay query for this component using Relay.QL
// This data will come back as props for the Home component using
// the name of the fragment. (see props.user above)
export default Relay.createContainer(Home, {
  // We pass an object of fragments defining the data we need for this component
  fragments: {
    // Relay.QL is a way to tag ES6 Template literals so Relay knows how to parse them
    // more info here: https://facebook.github.io/relay/docs/api-reference-relay-ql.html#content
    user: () => Relay.QL`
      fragment on User {
        login
      }
    `,
  },
});
