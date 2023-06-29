import ReactDOM from 'react-dom/client';
import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, createBrowserRouter} from "react-router-dom";
import App from "./App";
import './styles/main.scss'

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>
);