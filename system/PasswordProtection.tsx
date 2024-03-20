'use client';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export default function PasswordProtection(props) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const confirm = window.prompt('Please enter access key');
    if (Utilities.isEmpty(confirm)) {
      return;
    }

    if (confirm === 'PfjhgUw9kL7sB7kDt96D') {
      setShow(true);
      return;
    }

    return () => {};
  }, []);

  if (!show) {
    return null;
  }

  return <>{props.children}</>;
}
