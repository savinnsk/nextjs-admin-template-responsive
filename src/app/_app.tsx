import { AppProps } from "next/app";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
