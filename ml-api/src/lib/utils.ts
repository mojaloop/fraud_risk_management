/* eslint-disable no-console */
import util from 'util';
import fetch, {
  BodyInit,
  HeadersInit,
  RequestInit,
  Response,
} from 'node-fetch';

const { NIFI_ENDPOINT, NIFI_PORT } = require('../config');

const DEFAULT_HEADERS = {
  accept: 'application/json',
  'content-type': 'application/json',
};

const buildUrl = (path: string): string =>
  `${NIFI_ENDPOINT}:${NIFI_PORT}${path}`;

const throwOrJson = async (
  res: Response,
  message = `HTTP rpequest ${res.url} returned error response ${res.status}`,
) => {
  const resp = await res.json();
  if (res.headers.get('content-length') === '0' || res.status === 204) {
    return null;
  }
  if (res.ok) {
    return resp;
  }
  throw new Error(JSON.stringify({ message, res, jsonResponse: resp }));
};

async function get(path: string, opts: { headers: HeadersInit }) {
  try {
    const reqOpts: RequestInit = {
      method: 'GET',
      headers: (opts && opts.headers) || DEFAULT_HEADERS,
    };
    const url = buildUrl(path);
    return await fetch(url, reqOpts).then(throwOrJson);
  } catch (e) {
    console.log(
      util.format(
        'Error attempting GET. URL:',
        path,
        'Opts:',
        opts,
        'Error:',
        JSON.stringify(e),
      ),
    );
    throw e;
  }
}

async function put(
  path: string,
  body: BodyInit,
  opts: { headers: HeadersInit; json: boolean },
) {
  try {
    const reqOpts = {
      method: 'PUT',
      headers: opts.headers || DEFAULT_HEADERS,
      body: opts.json === false ? body : JSON.stringify(body),
    };
    const url = buildUrl(path);
    return await fetch(url, reqOpts).then(throwOrJson);
  } catch (e) {
    console.log(
      util.format(
        'Error attempting PUT. URL:',
        path,
        'Opts:',
        opts,
        'Body:',
        body,
        'Error:',
        e,
      ),
    );
    throw e;
  }
}

async function post(
  path: string,
  body: BodyInit,
  opts: { headers: HeadersInit; json: boolean },
) {
  try {
    const reqOpts = {
      method: 'POST',
      headers: (opts && opts.headers) || DEFAULT_HEADERS,
      body: opts && opts.json === false ? body : JSON.stringify(body),
    };
    const url = buildUrl(path);
    return await fetch(url, reqOpts).then(throwOrJson);
  } catch (e) {
    console.log(
      util.format(
        'Error attempting POST. URL:',
        path,
        'Opts:',
        opts,
        'Body:',
        body,
        'Error:',
        e,
      ),
    );
    throw e;
  }
}

async function del(
  path: string,
  opts: { headers: HeadersInit; json: boolean },
) {
  try {
    const reqOpts = {
      method: 'DELETE',
      headers: opts.headers || DEFAULT_HEADERS,
    };
    const url = buildUrl(path);
    return await fetch(url, reqOpts).then(throwOrJson);
  } catch (e) {
    console.log(
      util.format(
        'Error attempting DELETE. URL:',
        path,
        'Opts:',
        opts,
        'Error:',
        e,
      ),
    );
    throw e;
  }
}

export { get, put, post, del };
