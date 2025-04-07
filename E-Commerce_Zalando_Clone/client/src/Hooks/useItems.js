import { useEffect, useState } from 'react'
import itemsAPI from '../api/items'

export function useGetAllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await itemsAPI.getAll();

            setItems(result);
        })();
    }, []);

    return [items, setItems];
}

export function useGetOneItem() {
    const [item, setItem] = useState({});

    useEffect(() => {
        (async () => {
            const result = await itemsAPI.getOne(itemId);

            setItems(result);
        })();
    }, []);
}