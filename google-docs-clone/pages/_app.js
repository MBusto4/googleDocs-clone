import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (

    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  )
}

export default MyApp
