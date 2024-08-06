import styles from '@system/MonospacePreview.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Cross from '@system/svg/Cross';
import Replace from '@system/svg/Replace';
import Caret from '@system/svg/Caret';

export default function MonospacePreview(props) {
  return (
    <div className={Utilities.classNames(styles.root, props.isActive ? styles.active : null)} style={props.style}>
      <div className={styles.title}>
        <span className={styles.left}>{props.title}</span>
        {props.onRefresh ? (
          <span className={styles.right}>
            <input
              type="file"
              id={`refresh-input-${props.itemKey}`}
              style={{ display: 'none' }}
              onChange={(e) => {
                e.preventDefault();
                if (e.target.files && e.target.files[0]) {
                  props.onRefresh(e.target.files[0]);
                }
                e.target.value = '';
              }}
            />
            <label htmlFor={`refresh-input-${props.itemKey}`}>
              <Replace width="12px" height="12px" />
            </label>
          </span>
        ) : null}
        {props.onDelete ? (
          <span className={styles.right} onClick={props.onDelete}>
            <Cross height="12px" />
          </span>
        ) : null}
      </div>
      <div className={styles.children} onClick={props.onClick}>
        {props.children}
      </div>
    </div>
  );
}
