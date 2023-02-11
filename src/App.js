import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category/Category';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import ProductPage from './pages/ProductPage/ProductPage';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='my-profile' element={<Profile />} />
            <Route path='category' element={<Category />} />
            <Route path='orders' element={<Orders />} />
            <Route path='cart' element={<Cart />} />
            <Route path='product' element={<ProductPage />} />
          </Route>

             {/* ------------------------error page when routes found------------------ */}

             <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;