import Header from "./components/Header";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Register from "./components/Register";
import Private from "./components/Private";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductShow from "./components/ProductShow";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Private />} >
          <Route path="/products" element={<ProductShow />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
