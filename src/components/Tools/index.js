
import React from 'react';
import styles from './styles.scss';

function Tools() {
  return (
    <ul>
      <li className={styles.tool}>
        <a href="https://facebook.github.io/react/">React</a> - component library
      </li>
      <li className={styles.tool}>
        <a href="https://facebook.github.io/relay/">Relay</a> - For Data fetching from <a href="http://graphql.org/"> GraphQL</a>
      </li>
      <li className={styles.tool}>
        <a href="https://github.com/reactjs/react-router">React Router</a> - browser routing
      </li>
      <li className={styles.tool}>
        <a href="https://github.com/relay-tools/react-router-relay">React Router Relay</a> - To integrate Relay with react-router
      </li>
      <li className={styles.tool}>
        <a href="https://github.com/css-modules/css-modules">Sass Modules</a> - CSS Modules with a Sass pre-processor for styles
      </li>
      <li className={styles.tool}>
        <a href="https://github.com/airbnb/enzyme">Enzyme</a> - React component testing
      </li>
    </ul>
  );
}

export default Tools;
