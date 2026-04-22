import styles from '@system/modals/Modals.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

const MODAL_WIDTH = 240;
const MODAL_GUTTER_OFFSET = 24;

export default function ModalNavigation(props) {
  const style = Utilities.calculatePositionWithGutter(props.parentRect, MODAL_WIDTH, window.innerWidth, MODAL_GUTTER_OFFSET);

  return (
    <OutsideElementEvent className={styles.modal} onOutsideEvent={props.onOutsideEvent} style={{ textAlign: style.side, top: style.top, right: style.right }}>
      <span className={styles.item} onClick={props.onHandleThemeChange}>
        Toggle Theme
      </span>
      <a href="#" className={styles.item}>
        Item II
      </a>
      <a href="#" className={styles.item}>
        Item III
      </a>
      <a href="#" className={styles.item}>
        Item IV
      </a>
      <hr className={styles.divider} />
      <a href="https://x.com/internetxstudio" className={styles.item} target="_blank">
        X
      </a>
      <a href="https://github.com/internet-development/nextjs-sass-starter" className={styles.item} target="_blank">
        GitHub
      </a>
      <a href="https://read.cv/teams/intdev" className={styles.item} target="_blank">
        ReadCV
      </a>
      <a href="https://internet.dev" className={styles.item} target="_blank">
        Website
      </a>
    </OutsideElementEvent>
  );
}
