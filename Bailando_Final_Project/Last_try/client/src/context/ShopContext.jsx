import { createContext, useState } from "react";
// import products from '../../../server/data/items-to-display.json'
// import all_products from "../assets/all_products";
import items from "../../../server/data/items.json";

export const ShopContext = createContext();

const getDefaultCart = ()=>{
    
    let cart = {};
    for (let index = 0; index < items.length+1; index++) {
        cart[index] = 0;
    }
    console.log(cart);
    
    return cart;
}

export default function ShopContextProvider(props) {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            //let itemInfo = Array.prototype.find.call(items, (product) => product.id === Number(item)); // doesn't work
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      }

      const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
      }

    const contextValue = {getTotalCartItems,getTotalCartAmount,items,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}