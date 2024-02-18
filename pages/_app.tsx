import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
