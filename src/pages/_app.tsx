import '@/styles/globals.css'
import axios from 'axios';
import type { AppProps } from 'next/app'
import { getCookie } from 'cookies-next';
import { Provider } from 'react-redux'
import { persistor, store } from '../store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const token = getCookie('token')

axios.defaults.baseURL = 'https://figtree.onrender.com/api/';
axios.defaults.headers.common['Authorization'] = token;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
