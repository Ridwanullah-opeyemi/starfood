import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/navigationbar/navbar";
import StarFoodFlyer from "./component/folter";
import ProductProvider from "./contexts/ProductContext";
import LandingPage from "./pages/landingpage/home";
import Dash from "./pages/home/dashproduct/dashprod";


const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        {/* <CartProvider> */}
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product/:id" element={<Dash />} />
        
          </Routes>
          <StarFoodFlyer />
        {/* </CartProvider> */}
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
