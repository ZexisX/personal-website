// _app.tsx

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Title */}
        <title>Profile | Le Vinh Khang</title>

        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A student hailing from Vietnam 🇻🇳 and residing in the vibrant city of Ho Chi Minh 🌆. Immersed in the dynamic realm of web technology 💻, his blog, hosted on Vercel, becomes a canvas for documenting his journey 🎒. Despite occasional oversight, his passion for learning web technology fuels his creative writing endeavors ✍️." />
        {/* Add more meta tags as needed */}

        {/* Favicon (example assuming you have a favicon.ico file in public directory) */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
