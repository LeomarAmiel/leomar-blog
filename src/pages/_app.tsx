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
            <link rel="shortcut icon" href="/static/favicon.svg" />
            <meta
              property="og:title"
              content="Leomar Amiel | Software Engineer"
            />
            <meta
              property="og:description"
              content="You need a website or app? I'm happy to help your team!"
            />
            <meta property="og:image" content="/static/leomaramiel.jpeg" />
            <meta property="og:url" content="https://leomaramiel.tech/" />
            <title>Leomar Amiel</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
