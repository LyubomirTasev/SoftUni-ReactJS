import * as request from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/create-items';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const newItems = Object.values(result);

    return newItems;
}