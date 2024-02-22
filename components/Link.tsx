import styles from '@components/Link.module.scss';

import { ReactNode } from 'react';

function SwitchLinkStyle(style) {
  let defaultStyle;

  switch (style) {
    case 'animated-background-green':
      return (defaultStyle = `${styles.animated}  ${styles.background}`);
    case 'animated-green':
      return (defaultStyle = `${styles.animated} ${styles.green}`);
    case 'text':
    default:
      return (defaultStyle = `${styles.grey}`);
  }
}

export interface LinkProps {
  children: ReactNode;
  className?: string;
  color?: string;
  href: string;
  props?: any;
  linkStyle?: string;
  target?: string;
}

export default function Link({ children, className, color, href, props, linkStyle, target }: LinkProps) {
  const defaultStyle = SwitchLinkStyle(linkStyle);

  return (
    <a href={href} className={`${defaultStyle} ${className}`} {...props} target={target ?? '_self'}>
      <span style={{ color: color }}>{children}</span>
    </a>
  );
}
