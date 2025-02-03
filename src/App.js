import "./App.css";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import { Provider } from "./contexts/Context";
import Home from "./pages/Dashboard/Home";
import Category from "./pages/Categories/Category";
import Product from "./pages/Products/Product";
import Review from "./pages/Reviews/Review";
import User from "./pages/User/User";
import OrdersCompletedTable from "./components/common/OrdersCompletedTable";
import AddProduct from "./pages/Products/AddProduct";
import SignIn from "./pages/Auth/signIn";
import ChangePassword from "./pages/Auth/chnagePassword";
import ForgotPassword from "./pages/Auth/forgotPassword";
import Orders from "./pages/Orders/Orders";
import UserInformation from "../src/pages/User/UserInformation";
import OrderInformation from "../src/pages/Orders/OrderInformation";
import { useCustomContext } from "./contexts/Context";

function App() {
  
  // const {isAuthenticated} =  useCustomContext(); 

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
            {/* <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/signIn"} />} /> Redirect to dashboard if logged in, otherwise to login */}
      
            <Route path="/" element={<Navigate to="/admin/login" replace />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/admin/login/" element={<SignIn />} />
            <Route path="/auth/signIn" element={<SignIn/>} />
            <Route path="/auth/admin/reset/:id" element={<ChangePassword/>} />
            <Route path="/auth/admin/forgot-password" element={<ForgotPassword/>} />

            <Route path="/users" element={<User />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/addProduct" element={<AddProduct />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/categories" element={<Category />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/ordersCompleted" element={<OrdersCompletedTable/>} />
            <Route path="/users/:id" element={<UserInformation />} />
            <Route path="/order/:id" element={<OrderInformation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
