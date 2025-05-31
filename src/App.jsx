import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Nav from "./component/navigationbar/navbar";
import StarFoodFlyer from "./component/folter";
import { CartProvider } from "./contexts/cartContexts";
import AllProduct from "./component/products/product";
import Notfound from "./component/search/notfound";
import GeneralSearch from "./component/search/searchinput";
import ProductProvider from "./contexts/ProductContext";


const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<AllProduct />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/generalSearch" element={<GeneralSearch />} />
          </Routes>
          <StarFoodFlyer />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
