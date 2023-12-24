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
        <meta name="description" content="He’s a student from Vietnam, living in Ho Chi Minh City. the blog for documentation about his programming 🎒 journey, running on Amazon Hosting, he also loves to learning web technology; but he often forgot, that a reason why him doing the writing." />
        {/* Add more meta tags as needed */}

        {/* Favicon (example assuming you have a favicon.ico file in public directory) */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
