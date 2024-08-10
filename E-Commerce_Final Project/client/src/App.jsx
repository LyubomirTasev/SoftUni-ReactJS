import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";
import LoginForm from "./Pages/LoginForm"
import CreateItem from "./Pages/CreateItem";
import AdminLogin from "./Pages/AdminLogin";
import { useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import Register from "./Pages/Register";


function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  };

  return (
    <AuthContext.Provider value={contextData}>
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/item/create" element={<CreateItem />} />
          {/* <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/register" element={<Register />} /> */}

          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
