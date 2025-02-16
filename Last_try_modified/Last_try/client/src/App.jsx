import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Shop from "./Shop";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/footer/Footer";
import Item from "./components/item/Item";
import ItemDetails from "./components/item-details/ItemDetails";
import ShopCategory from "./components/shopCategory/ShopCategory";
import Cart from "./components/Cart";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ShopContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/men" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/kids" element={<ShopCategory category="kid" />} />
              <Route path="/items" element={<Item />} />
              <Route path="/items/:itemId/details" element={<ItemDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShopContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
