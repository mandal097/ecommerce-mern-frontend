import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/Category/Category';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import ProductPage from './pages/ProductPage/ProductPage';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Profile';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './utils/ScrollToTop';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>

        <Navbar />

        <Routes>

          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='my-profile' element={<Profile />} />
            <Route path='category' element={<Category />} />
            <Route path='orders' element={<Orders />} />
            <Route path='cart' element={<Cart />} />
            <Route path='product/:productId/*'>
              <Route index element={<ProductPage />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>

          {/* ------------------------error page when routes found------------------ */}

          <Route path='*' element={<Error />} />

        </Routes>

        <Footer />

      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
