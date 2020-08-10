import App from "next/app";
import ThemeProvider from "@context/themeProvider";
import { GlobalStyle } from "@styles/index";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <>
          <GlobalStyle />
          <Head>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/public/static/favicon.svg" />
            <title>Leomar Amiel</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
