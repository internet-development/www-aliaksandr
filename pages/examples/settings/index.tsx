import * as React from 'react';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Cookies from 'js-cookie';
import DemoSettings from '@system/layouts/demos/DemoSettings';
import DemoSettingsSidebar from '@system/layouts/demos/DemoSettingsSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import TwoColumnLayout from '@system/layouts/TwoColumnLayout';

import { P } from '@system/typography';

function ExampleSettings(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [active, setActive] = React.useState<string>('PERSONAL');

  return (
    <Page
      title="api.internet.dev: Settings"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/settings"
    >
      <KeyHeader host={props.host} onInputChange={setKey} onHandleThemeChange={Utilities.onHandleThemeChange} value={key} />
      <TwoColumnLayout sidebar={<DemoSettingsSidebar active={active} onSetKey={setKey} viewer={props.viewer} />}>
        <DemoSettings active={active} sessionKey={key} viewer={props.viewer} />
      </TwoColumnLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let viewer = null;
  let sessionKey = context.req.cookies['sitekey'] || '';
  if (Utilities.isEmpty(sessionKey)) {
    return {
      props: { sessionKey: '', viewer: null },
    };
  }

  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }
  } catch (e) {}

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleSettings;