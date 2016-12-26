
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

function App({ children }) {
  return (
    <div>
      <i className={styles.logo} />
      <h1 className={styles.heading}> Relay Tutorial </h1>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/tools">Tools</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/coolov">Olov</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/ccpricenytimes">Carrie</Link>
        </li>
      </ul>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
