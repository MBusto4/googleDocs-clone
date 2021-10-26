import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (


    <Component {...pageProps} />

  )
}

export default MyApp
