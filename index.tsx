import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
//import { myReducer } from '../reducers';
import createSagaMiddleware from '@redux-saga/core';
import { myReducer } from './reducers/reducers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { createRoot } from 'react-dom/client';
const sagaMiddleware = createSagaMiddleware();
//const store = configureStore({ reducer: myReducer });

const store = configureStore({
  reducer: myReducer,
  middleware: [sagaMiddleware],
});

//const store = configureStore({ allReducers });

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="login" element={<Login setUser={setUser} />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <StyledEngineProvider injectFirst>{/* <Demo /> */}</StyledEngineProvider>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
