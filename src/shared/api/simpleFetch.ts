import { API_URL } from 'shared/vars';

type Params = { [key: number | string]: number | string };

const TOKEN = '';

interface RequestURL {
  url: string;
  params?: Params;
  queryParams?: Params;
}
interface Request extends RequestURL {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH';
  body?: object;
  headers?: HeadersInit;
}

function removeSlashes(input: string): string {
  if (input.startsWith('/')) {
    return removeSlashes(input.slice(1));
  }
  if (input.endsWith('/')) {
    return removeSlashes(input.slice(0, -1));
  }
  return input;
}
const makeURL = (url: string) => {
  return `${removeSlashes(API_URL)}/${removeSlashes(url)}`;
};

export const simpleFetch = async <T>(
  { url, method = 'GET', body = {}, headers = {} }: Request
): Promise<T | undefined> => {
  let response = await fetch(makeURL(url), {
    method,
    body: method !== 'GET' ? JSON.stringify(body) : undefined,
    headers: {
      ...headers,
      accept: 'application/json',
      'X-VK-PAYLOAD': `${TOKEN || window.location.search.slice(1)}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Сервер вернул ошибку');
  }

  try {
    response = await response.json();
    return response as T;
  } catch {
    return undefined;
  }
};