import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./app/store";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './features/PAGES/HOME/Home';
import Login from './features/PAGES/LOGIN/Login';
import Dashboard from './features/PAGES/HOME/Dashboard';
import ProductDetails from './features/PAGES/PRO DETAILS/productDetails';

const container = document.getElementById('root');
const root = createRoot(container);

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

root.render(
    <Provider store={store}>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
           <Route path='/product/:productId' element={<ProductDetails/>} />
           <Route path='*' element={<h1>Page Not Found</h1>}/>
         </Routes>
       </BrowserRouter>
    </Provider>
);

reportWebVitals();