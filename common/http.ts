import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getHeaders = ({ key }) => {
  return { ...REQUEST_HEADERS, 'X-API-KEY': key };
};

export async function getViewer({ key }) {
  let viewer = null;
  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: getHeaders({ key }),
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }

    return viewer;
  } catch (e) {
    return null;
  }
}

export async function getViewerPosts({ key }) {
  const response = await fetch('https://api.internet.dev/api/posts', {
    method: 'POST',
    headers: getHeaders({ key }),
    body: JSON.stringify({ type: 'TXT_DEV' }),
  });
  const json = await response.json();
  if (json && json.data) {
    return json.data;
  }

  return null;
}

export async function getPublicPostsByEmail({ email }) {
  const response = await fetch('https://api.internet.dev/api/posts', {
    method: 'POST',
    headers: REQUEST_HEADERS,
    body: JSON.stringify({ email, type: 'TXT_DEV' }),
  });
  const json = await response.json();
  if (json && json.data) {
    return json.data;
  }

  return null;
}

export async function authenticate(data) {
  const response = await fetch('https://api.internet.dev/api/users/authenticate', {
    method: 'POST',
    headers: REQUEST_HEADERS,
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
}

export async function createPost({ key }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/create', {
      method: 'POST',
      headers: getHeaders({ key }),
      body: JSON.stringify({ type: 'TXT_DEV', fields: { public: false } }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}

export async function deletePost({ id, key }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/delete', {
      method: 'POST',
      headers: getHeaders({ key }),
      body: JSON.stringify({ id }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}

export async function updatePost({ id, key, updates }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/update', {
      method: 'POST',
      headers: getHeaders({ key }),
      body: JSON.stringify({ id, updates }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result.data) {
    return null;
  }

  return result.data;
}

export async function getPostBySlug({ slug }) {
  let result;
  try {
    const response = await fetch(`https://api.internet.dev/api/posts/public/${slug}/`, {
      method: 'GET',
      headers: REQUEST_HEADERS,
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

export async function getPostById({ id }) {
  let result;
  try {
    const response = await fetch(`https://api.internet.dev/api/posts/${id}/`, {
      method: 'GET',
      headers: REQUEST_HEADERS,
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.data) {
    return null;
  }

  return result.data;
}

export async function uploadData({ file, key }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let signedResult;
  const name = file.name;
  const type = file.type;
  const size = file.size;

  if (size > Constants.MAX_SIZE_BYTES) {
    return { error: 'File size exceeds 15mb limit' };
  }

  try {
    const signedResponse = await fetch(`https://api.internet.dev/api/data/generate-presigned-url`, {
      method: 'POST',
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, file: name, size }),
    });
    signedResult = await signedResponse.json();
  } catch (e) {
    return null;
  }

  if (!signedResult) {
    return null;
  }

  if (signedResult.error) {
    return signedResult;
  }

  if (!signedResult.uploadURL) {
    return null;
  }

  try {
    await fetch(signedResult.uploadURL, {
      method: 'PUT',
      body: file,
    });
  } catch (e) {
    return null;
  }

  return signedResult;
}
