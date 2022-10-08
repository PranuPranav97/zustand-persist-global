import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useAppStore } from "../stote/app";

function MyApp({ Component, pageProps }: AppProps) {
  const appCtx = useAppStore();
  console.log(appCtx.data);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
