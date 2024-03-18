import * as HTTP from '@common/http';

import Cors from '@modules/cors';
import Cookies from 'universal-cookie';

import { headers } from 'next/headers';

export function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export async function setup({ email }) {
  const list = headers();
  const host = list.get('host');
  const cookie = list.get('cookie');
  const protocol = list.get('x-forwarded-proto');
  const cookies = new Cookies(cookie, { path: '/' });
  const key = cookies.get('txtdev');

  let viewer;
  try {
    viewer = await HTTP.getViewer({ key });
  } catch (e) {
    viewer = null;
  }

  return {
    host,
    cookie,
    protocol,
    viewer,
    isViewer: viewer && viewer.email === email,
  };
}

export async function isAuthenticated(cookie) {
  const cookies = new Cookies(cookie, { path: '/' });
  const key = cookies.get('txtdev');

  try {
    return await HTTP.getViewer({ key });
  } catch (e) {
    return null;
  }
}

export async function getAllPosts(cookie) {
  const cookies = new Cookies(cookie, { path: '/' });
  const key = cookies.get('txtdev');

  try {
    return await HTTP.getViewerPosts({ key });
  } catch (e) {
    return null;
  }
}

export async function getAllPublicPosts({ email }) {
  try {
    return await HTTP.getPublicPostsByEmail({ email });
  } catch (e) {
    return null;
  }
}

export async function getPostById({ id }) {
  try {
    return await HTTP.getPostById({ id });
  } catch (e) {
    return null;
  }
}

export async function getPostBySlug({ slug }) {
  let user = null;
  let post = null;
  try {
    const data = await HTTP.getPostBySlug({ slug });
    user = data.user;
    post = data.post;
  } catch (e) {
    return { user: null, post: null };
  }

  return { user, post };
}