import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext'; 
import Item from '../item/Item'; 
import './ShopCategory.css';

export default function ShopCategory({ category }) {
  const { items } = useContext(ShopContext); 

  const filteredItems = Object.keys(items).filter(
    key => items[key].category === category 
  );

  return (
    <div className='shop-category'>
      <div className="category-products">
        {filteredItems.length > 0 ? (
          filteredItems.map(key => (
            <Item key={items[key]._id} {...items[key]} />
          ))
        ) : (
          <h3>No products available in this category.</h3>
        )}
      </div>
    </div>
  );
}