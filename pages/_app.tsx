import type { AppProps } from "next/app";
import "../styles.css";
import Navbar from "../components/Navbar";
import { Bitter } from "next/font/google";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
