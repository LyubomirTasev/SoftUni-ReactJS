import { Link } from 'react-router-dom';
import './Item.css'

export default function ItemConstructor({
  _id,
  image,
  name,
  price
}) {
  return (
    <div className="item">
      <Link to={`/items/${_id}/details`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt=""  />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{price}</div>
      </div>
    </div>
  );
}
