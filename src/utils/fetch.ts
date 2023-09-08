const BASE_URL = 'https://jsonplaceholder.typicode.com';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface IParams {
  url: string;
  body?: any;
  method?: RequestMethod;
  headers?: HeadersInit_;
  mutation?: string | null;
}

export const makeRequest = async ({
  url,
  body = null,
  method = 'GET',
  headers = {},
}: IParams) => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify({body});
  }

  const res = await fetch(`${BASE_URL}/${url}`, options);
  if (!res.ok) {
    throw new Error('error fetch');
  }
  return await res.json();
};
