import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/items-to-display';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const displayedItems = Object.values(result);

    return displayedItems;
}