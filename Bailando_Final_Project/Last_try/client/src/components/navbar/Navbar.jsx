import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import './Navbar.css';
import { ShopContext } from "../../context/ShopContext";

export default function Navbar() {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return(
        <div className='navbar'>
      <div className="nav-logo">
        <img src={"https://cdn-images-1.medium.com/max/1200/1*fYAdvwatzBRQ4S6l7rGnTQ.png"} alt="" />
        <p onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Bailando</Link>{menu==="shop"}</p>
      </div>
      <ul className="nav-menu">
        {/* <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li> */}
        <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none' }} to="women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/cart'><img src={"https://static.vecteezy.com/system/resources/previews/002/205/906/original/shopping-bag-icon-free-vector.jpg"} alt="" /></Link>
        {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
      </div>
    </div>
    )
}