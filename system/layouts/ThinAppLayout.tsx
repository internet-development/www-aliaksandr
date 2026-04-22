import styles from '@system/layouts/ThinAppLayout.module.css';

import * as React from 'react';

export default function ThinAppLayout(props) {
  return <div className={styles.root}>{props.children}</div>;
}
