import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Nav from "./component/navigationbar/navbar";
import LogIn from "./pages/signPages/logIn";
import Products from "./component/products/productsCarti";
import StarFoodFlyer from "./component/folter";
import Register from "./pages/signPages/register";
import { CartProvider } from "./contexts/cartContexts";  // ✅ Correct import
import AllProduct from "./component/products/product";
import Signup from "./component/sign/signup";
import SignIn from "./component/sign/signin";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<AllProduct />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        <StarFoodFlyer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
