import type { AppProps } from "next/app";
import "../styles.css";
import Navbar from "../components/Navbar";
import { Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className={bitter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
