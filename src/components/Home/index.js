
import React from 'react';
import styles from './styles.scss';

function Home() {
  return (
    <section>
      <p className={styles.paragraph}>
        Welcome to the kyt Relay tutorial.
        This serves as a relay tutorial and a base for a client side app
        that uses both Relay for data fetching.
      </p>
      <p className={styles.paragraph}>
        Check out the Tools section for an outline of the libraries that
        are used in this Starter-kyt.
      </p>
    </section>
  );
}

export default Home;
