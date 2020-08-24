import '../styles/globals.scss';
import { AppProps } from 'next/app';
import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
