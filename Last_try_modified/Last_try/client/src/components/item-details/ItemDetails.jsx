import { useContext, useEffect, useState } from "react";
import itemAPI from "../../api/items";
import { ShopContext } from "../../context/ShopContext";


import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import './ItemDetails.css';
import { useNavigate, useParams } from "react-router-dom";

export default function ItemDetails() {
    // const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const navigate = useNavigate();

    function dropInCart() {
      navigate('/cart');
    }

    const[item, setItem] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        (async () => {
            const result = await itemAPI.getOne(itemId);
            setItem(result);
        })();
    });
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={item.image} alt="" />
            <img src={item.image} alt="" />
            <img src={item.image} alt="" />
            <img src={item.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={item.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{item.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">{item.price}</div>
        </div>
        <div className="productdisplay-right-description">
        {item.description}
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXl</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}