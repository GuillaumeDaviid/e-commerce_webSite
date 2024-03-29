import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import Detail from './components/Detail'
import Contact from './components/Contact'
import { Helmet } from 'react-helmet'
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <Helmet>
        <title>Commercia</title>
      </Helmet>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} >
          <Route path=":id" element={<Product />} />
        </Route >
        <Route path="detail" element={<Detail />}>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
