import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './layout.module.css';
 console.log("styles ", styles);

const layout = (props) => (
  <Aux>
    <div>Toolbar sidebar, backdrop</div>
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout; 