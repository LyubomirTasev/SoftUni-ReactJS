import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({ _id, image, name, price, oldPrice }) {
  return (
    <div className="item">
      <Link to={`/items/${_id}/details`}>
        <img src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{price}</div>
        {oldPrice && <div className="item-price-old">{oldPrice}</div>}
      </div>
    </div>
  );
}