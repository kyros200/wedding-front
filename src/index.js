import React from 'react';
import ReactDOM from 'react-dom';
import RSVP from './pages/RSVP';
import Quiz from './pages/Quiz';
import Error from './pages/Error';
import PageLayout from './layouts/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './main.scss'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme = "colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<>Tela principal funcionando! Cabeçalho e Rodapé são só pra dizer que tem coisas</>} />
            <Route path="error" element={<Error />} />
            <Route path="rsvp" element={<RSVP />} />
            <Route path="quiz" element={<Quiz />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
