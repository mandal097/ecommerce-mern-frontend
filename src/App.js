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
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/AboutUs/About';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';

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
            <Route path='contact_us' element={<ContactUs />} />
            <Route path='about_us' element={<About />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:blogId' element={<BlogDetails />} />
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
