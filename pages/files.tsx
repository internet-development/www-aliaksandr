import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Cookies from 'js-cookie';
import FormUpload from '@system/FormUpload';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { onListData, onDeleteData, onUploadData } from '@common/utilities';

function ExampleFiles(props) {
  const [currentError, setError] = React.useState<string | null>(null);
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [domain, setDomain] = React.useState<string>('internet.dev');
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [uploading, setUploading] = React.useState<boolean>(false);

  return (
    <Page
      title="api.internet.dev: Files"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/files"
    >
      <KeyHeader
        isModalVisible={!!currentModal}
        onInputChange={setKey}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION_TEMPLATE', parentId: 'site-navigation-button' })}
        value={key}
      />

      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            const confirm = window.confirm('Are you sure you want to sign out?');
            if (!confirm) {
              return;
            }

            setKey('');
            Cookies.remove('sitekey');
            window.location.reload();
          }}
        />
        <FormHeading style={{ marginTop: 64 }}>Files</FormHeading>
        <FormParagraph>Organize files you have uploaded using this template.</FormParagraph>
        <Button
          style={{ margin: `24px 0 0 0`, width: '100%'}}
          onClick={async () => {
            setLoading(true);
            const response = await onListData({ key });
            setLoading(false);

            if (!response) {
              setModal({
                name: 'ERROR',
                message: 'Something went wrong but we are too lazy to tell you.',
              });
              return;
            }

            setFiles(response.data);
          }}
        >
          List files
        </Button>
        {files.map((each: Record<string, any>) => {
          return (
            <MonospacePreview
              key={each.id}
              onDelete={async () => {
                const confirm = window.confirm(`Are you sure you want to delete ${each.data.src}? This action is irreversible.`);
                if (!confirm) {
                  return;
                }

                const response = await onDeleteData({ id: each.id, key });
                const list = await onListData({ key });
                setUploading(false);

                if (!list) {
                  return;
                }

                setFiles(list.data);
              }}
              style={{ marginTop: 16 }}
              title={each.data.type}
            >
              {JSON.stringify(each, null, 2)}
            </MonospacePreview>
          );
        })}

        <FormHeading style={{ marginTop: 64, color: 'var(--color-white)' }}>Upload</FormHeading>
        <FormParagraph>
          The following steps represent whether or not you have permissions to upload a file. To upload a file you need to be part of an organization and have been granted
          permissions.
        </FormParagraph>

        <InputLabel style={{ marginTop: 24 }}>Domain (optional)</InputLabel>
        <Input autoComplete="off" onChange={(e) => setDomain(e.target.value)} style={{ marginTop: 8 }} type="text" value={domain} />

        <FormUpload
          loading={uploading}
          onSetFile={async (file) => {
            setUploading(true);
            const response = await onUploadData({ file, domain, key, setModal });
            if (!response) {
              setUploading(false);
              return;
            }

            if (response.error) {
              setUploading(false);
              setModal({ name: 'ERROR', message: response.message });
              return;
            }

            const list = await onListData({ key });
            setUploading(false);

            if (!list) {
              return;
            }

            setFiles(list.data);
          }}
          style={{ marginTop: 24 }}
        />
      </ThinAppLayout>
      <GlobalModalManager
        currentModal={currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onSetModal={setModal}
        onSignOut={() => {
          const confirm = window.confirm('Are you sure you want to sign out?');
          if (!confirm) {
            return;
          }

          setKey('');
          Cookies.remove('sitekey');
          window.location.reload();
        }}
        viewer={props.viewer}
      />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let viewer = null;
  let sessionKey = context.req.cookies['sitekey'] || '';

  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }
  } catch (e) {
    return null;
  }

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleFiles;