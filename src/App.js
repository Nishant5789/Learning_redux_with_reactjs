import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
