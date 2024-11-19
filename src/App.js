import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from './contexts/Context';
import Home from './pages/Home';
import Category from './pages/Category';
import Orders from './pages/Orders';
import Product from './pages/Product';
import Review from './pages/Review';
import User from './pages/User';
import ButtonTest from './pages/ButtonTest';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<User/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/categories" element={<Category/>} />
            <Route path="/reviews" element={<Review/>} />
            <Route path="/buttontest" element={<ButtonTest/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
