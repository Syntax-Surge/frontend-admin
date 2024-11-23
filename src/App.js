import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/Context";
import Home from "./pages/Home";
import Category from "./pages/Categories/Category";
import Order from "./pages/Order";
import Product from "./pages/Products/Product";
import Review from "./pages/Review";
import User from "./pages/User/User";
import ButtonTest from "./pages/ButtonTest";
import AddProduct from "./pages/Products/AddProduct";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/addProduct" element={<AddProduct />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/buttontest" element={<ButtonTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
