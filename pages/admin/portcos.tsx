import * as Constants from '@common/constants';
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
import PasswordProtection from '@system/PasswordProtection';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

async function onListData({ key, domain }) {
  let result;

  try {
    const response = await fetch('https://api.internet.dev/api/data', {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ site: domain }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
    }
    result = await response.json();
  } catch (e) {
    console.error('Failed to fetch list data:', e.message);
    return { error: true, message: e.message };
  }

  if (!result) {
    return { error: true, message: 'No result returned from the API' };
  }

  if (!result.data) {
    return { error: true, message: "Result does not contain 'data' field" };
  }

  return result;
}

async function onDeleteData({ id, key }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/data/delete', {
      method: 'DELETE',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (result.error) {
    return null;
  }

  return result;
}

export async function onUploadData({ file, domain, key, setModal, fields }) {
  let signedResult;
  const name = file.name;
  const type = file.type;
  const size = file.size;

  if (size > Constants.MAX_SIZE_BYTES) {
    setModal({ name: 'ERROR', message: 'File size exceeds 15mb limit' });
    return;
  }

  try {
    const signedResponse = await fetch(`https://api.internet.dev/api/data/generate-presigned-url`, {
      method: 'POST',
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, domain: domain, file: name, size, fields }),
    });
    signedResult = await signedResponse.json();
  } catch (e) {
    return null;
  }

  if (!signedResult) {
    setModal({ name: 'ERROR', message: 'Failed to upload.' });
    return null;
  }

  if (signedResult.error) {
    setModal({ name: 'ERROR', message: signedResult.message });
    return null;
  }

  if (!signedResult.uploadURL) {
    setModal({ name: 'ERROR', message: 'Failed to upload your data.' });
    return null;
  }

  try {
    fetch(signedResult.uploadURL, {
      method: 'PUT',
      body: file,
    });
  } catch (e) {
    return null;
  }

  return signedResult;
}

function Portcos(props) {
  const [currentError, setError] = React.useState<string | null>(null);
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [domain, setDomain] = React.useState<string>('sasha.page');
  const [companyName, setCompanyName] = React.useState<string>('');
  const [companyLink, setCompanyLink] = React.useState<string>('');
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [uploading, setUploading] = React.useState<boolean>(false);

  return (
    <PasswordProtection>
      <Page
        title="sasha.page: Portfolio Companies Upload"
        description="A place to upload new portfolio companies and delete old ones."
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
            style={{ margin: `24px 0 0 0`, width: '100%' }}
            onClick={async () => {
              setLoading(true);
              let response;
              try {
                response = await onListData({ key, domain });
              } catch (error) {
                setModal({
                  name: 'ERROR',
                  message: 'An error has occurred. Enter your API key and try again.',
                });
                response = null;
              }
              setLoading(false);

              if (!response || response.error === true) {
                setModal({
                  name: 'ERROR',
                  message: 'An error has occurred. Enter your API key and try again.',
                });
                return;
              }

              setFiles(response.data);
            }}
          >
            List files
          </Button>
          {files &&
            files.map((each: Record<string, any>) => {
              return (
                <MonospacePreview
                  key={each.id}
                  onRefresh={async (file) => {
                    const confirm = window.confirm(`Are you sure you want to replace ${each.data.src} with another image? This action is irreversible.`);
                    if (!confirm) {
                      return;
                    }

                    const deleteResponse = await onDeleteData({ id: each.id, key });
                    if (!deleteResponse || deleteResponse.error) {
                      setModal({
                        name: 'ERROR',
                        message: 'Failed to delete the file. Please try again.',
                      });
                      return;
                    }

                    setUploading(true);
                    const response = await onUploadData({
                      file,
                      domain: domain,
                      key,
                      setModal,
                      fields: { site: domain, companyName: each.data.companyName, companyLink: each.data.companyLink },
                    });

                    if (!response) {
                      setUploading(false);
                      return;
                    }

                    if (response.error) {
                      setUploading(false);
                      setModal({ name: 'ERROR', message: response.message });
                      return;
                    }

                    const list = await onListData({ key, domain });

                    setUploading(false);

                    if (!list) {
                      return;
                    }

                    setFiles(list.data);
                  }}
                  onDelete={async () => {
                    const confirm = window.confirm(`Are you sure you want to delete ${each.data.src}? This action is irreversible.`);
                    if (!confirm) {
                      return;
                    }

                    const response = await onDeleteData({ id: each.id, key });
                    const list = await onListData({ key, domain });
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

          <InputLabel style={{ marginTop: 24 }}>Portfolio Company Name</InputLabel>
          <Input autoComplete="off" onChange={(e) => setCompanyName(e.target.value)} style={{ marginTop: 8 }} type="text" value={companyName} />

          <InputLabel style={{ marginTop: 24 }}>Portfolio Company URI (e.g. atlaszk.com)</InputLabel>
          <Input autoComplete="off" onChange={(e) => setCompanyLink(e.target.value)} style={{ marginTop: 8 }} type="text" value={companyLink} />

          <FormUpload
            loading={uploading}
            onSetFile={async (file) => {
              setUploading(true);
              const response = await onUploadData({ file, domain, key, setModal, fields: { site: domain, companyName, companyLink } });
              if (!response) {
                setUploading(false);
                return;
              }

              if (response.error) {
                setUploading(false);
                setModal({ name: 'ERROR', message: response.message });
                return;
              }

              const list = await onListData({ key, domain });
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
    </PasswordProtection>
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

export default Portcos;
