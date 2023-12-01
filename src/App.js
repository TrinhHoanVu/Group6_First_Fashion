import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Homepage from './Homepage';
import BackToTopButton from "./BackToTopButton";
import ContrastButton from './ContrastButton';
import Footer from './Footer';
import AdvancedButton from './AdvancedButton';
import Account from './Account';
import ContactUs from './ContactUs';
import ShowProduct from './components/ShowProduct'
import ShowBrandProduct from './components/ShowBrandProduct'
import ShoppingBag from './ShoppingBag';
import Payment from './Payment';
import ProductDetail from './ProductDetail';
import AboutUs from './AboutUs';




function App() {
  const [value, setValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [clothesProduct, setClothesProduct] = useState({});
  const [perfumeProduct, setPerfumeProduct] = useState({});
  const [shoesProduct, setShoesDroduct] = useState({});
  const [chanelProduct, setChanelProduct] = useState({});
  const [gucciProduct, setGucciProduct] = useState({});
  const [hermesProduct, setHermesProduct] = useState({});

  console.log("test")
  useEffect(() => {
    fetch('./json/Shoes.json')
      .then(response => response.json())
      .then(data => setShoesDroduct(data));
  }, []);


  console.log('test2')
  console.log(shoesProduct)
  console.log(clothesProduct)
  console.log(perfumeProduct)
  console.log(chanelProduct)
  console.log(gucciProduct)
  console.log(hermesProduct)
  
  useEffect(() => {
    fetch('./json/HermesProduct.json')
      .then(response => response.json())
      .then(data => setHermesProduct(data));
  }, []);


  useEffect(() => {
    fetch('./json/Clothes.json')
      .then(response => response.json())
      .then(data => setClothesProduct(data));
  }, []);

  useEffect(() => {
    fetch('./json/Perfume.json')
      .then(response => response.json())
      .then(data => setPerfumeProduct(data));
  }, []);

  useEffect(() => {
    fetch('./json/ChanelProducts.json')
      .then(response => response.json())
      .then(data => setChanelProduct(data));
  }, []);

  useEffect(() => {
    fetch('./json/GucciProducts.json')
      .then(response => response.json())
      .then(data => setGucciProduct(data));
  }, []);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  const handleToggleContrast = () => {
    setValue(!value);
  };

  const handleAccountClick = () => {
    setShowLoginForm(true);
  }

  const [allProducts, setAllProducts] = useState({})
  useEffect(() => {
    fetch('./json/AllProducts.json')
      .then(response => response.json())
      .then(data => setAllProducts(data));
  }, []);
  console.log(allProducts)
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (products) => {
    const exits = cartItems.find((x) => x.id === products.id)
    if (exits) {
      const newCartItems = cartItems.map((x) =>
        x.id === products.id ? { ...exits, qty: 1 } : x
      )
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...products, qty: 1 }];
      setCartItems(newCartItems);
    }
  }

  const onRemove = (product) => {
    console.log("Removing product:", product);
    const newCartItems = cartItems.filter((x) => {
      console.log("Checking product in cart:", x);
      return x.id !== product.id;
    });
    setCartItems(newCartItems);
  };


  const updateCartQuantity = (productId, quantity) => {
    const newCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, qty: quantity };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const [giftMessage, setGiftMessage] = useState('');

  const setGiftMessageOnServer = (text) => {
    setGiftMessage(text)
  }
  console.log(giftMessage)

  console.log(cartItems);
  return (
    <div className={`App ${value ? 'contrast-mode' : ''} ${clicked ? 'clicked' : ''}`}>

      <AdvancedButton clicked={clicked} showLoginForm={showLoginForm} onAccountClick={handleAccountClick} countCartItems={cartItems.length} />
      <div className={`home-toolbar  ${clicked ? 'clicked' : ''}`}>
        <div className={`home-navbar ${clicked ? 'clicked' : ''}`}>

          <Link to="/" className={`logo ${clicked ? 'clicked' : ''}`}>
            <h1 className={`home-logotext ${clicked ? 'clicked' : ''}`}
              onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}
            >
              FIRST FASHION
            </h1>

          </Link>

          <div className={`home-nav ${clicked ? 'clicked' : ''}`}>
            <Link to="/"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>HOME</h4></Link>
            <Link
              to="/clothes"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`}
                onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}
              >
                CLOTHES
              </h4>
            </Link>
            <Link to="/perfume"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>PERFUME</h4></Link>
            <Link to="/shoes"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>SHOES</h4></Link>
            <Link to="/contactus"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>CONTACT US</h4></Link>
            <Link to="/aboutus"><h4 className={`home-nav-name ${clicked ? 'clicked' : ''}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>ABOUT FIRST FASHION</h4></Link>
          </div>
          <div className={`home-line-nav  ${clicked ? 'clicked' : ''}`}></div>
        </div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/clothes' element={<ShowProduct products={clothesProduct} clicked={clicked} onAdd={onAdd} />}></Route>
          <Route path='/perfume' element={<ShowProduct products={perfumeProduct} clicked={clicked} onAdd={onAdd} />}></Route>
          <Route path='/shoes' element={<ShowProduct products={shoesProduct} clicked={clicked} onAdd={onAdd} />}></Route>
          <Route path='/chanel' element={<ShowBrandProduct products={chanelProduct} clicked={clicked} onAdd={onAdd} />}></Route>
          <Route path='/gucci' element={<ShowBrandProduct products={gucciProduct} clicked={clicked} onAdd={onAdd} />}></Route>
          <Route path='/hermes' element={<ShowBrandProduct products={hermesProduct} clicked={clicked} onAdd={onAdd} />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/account' element={<Account showLoginForm={showLoginForm} />}></Route>
          <Route path='/cart' element={<ShoppingBag cartItems={cartItems} onUpdateCartQuantity={updateCartQuantity} onRemove={onRemove} setGiftMessageOnServer={setGiftMessageOnServer} />}></Route>
          <Route path='/payment' element={<Payment cartItems={cartItems} giftMessage={giftMessage} />}></Route>
          <Route path='/:id' element={<ProductDetail onAdd={onAdd} products={allProducts} />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
        </Routes>
      </div>

      <Footer clicked={clicked} value={value} />
      <BackToTopButton />
      <ContrastButton isOn={value}
        handleToggle={handleToggleContrast}
        onClick={handleButtonClick}
        clicked={clicked}
      />
      <br /><br />
    </div>
  );
}

export default App;
