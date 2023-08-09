import '@/styles/globals.css'
import axios from 'axios';
import type { AppProps } from 'next/app'
import { getCookie } from 'cookies-next';

const token = getCookie('token')

axios.defaults.baseURL = 'http://localhost:3000/api/';
axios.defaults.headers.common['Authorization'] = token;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
