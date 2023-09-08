import {makeRequest} from '../utils/fetch';

export const getItems = (url: string) => makeRequest({url: `${url}?_limit=20`});
