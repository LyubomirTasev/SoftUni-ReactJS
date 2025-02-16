import { useEffect, useState } from 'react'
import itemAPI from '../api/items';

export function useGetAllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await itemAPI.getAll();

            setItems(result);
        })();
    }, []);

    return [items, setItems];
}

export function useGetOneItem(itemId) {
    const [item, setItem] = useState({});

    useEffect(() => {
        (async () => {
            const result = await itemAPI.getOne(itemId);

            setItem(result);
        })();
    }, [itemId]);

    return(
        item,
        setItem
    )
}