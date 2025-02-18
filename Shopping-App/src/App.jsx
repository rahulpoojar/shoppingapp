import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/mycart' element={<Cart/>} />
      </Routes>
  </BrowserRouter>
  </Provider>
    
  )
}

export default App
