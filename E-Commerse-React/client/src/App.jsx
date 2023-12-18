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
import LoginForm from "./Pages/LoginForm";
import Register from "./Pages/Register";
import { AuthProvider } from "./Context/authContext";
import Path from "./paths";
import Logout from "./Pages/Logout";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

function App() {
  return (
    <div>
      <AuthProvider>
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
          <Route path={Path.Logout} element={<Logout />} />
          <Route path="/success" element={<SuccessPage />} />

          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
