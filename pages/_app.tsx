import App from "next/app";
import ThemeProvider from "@context/themeProvider";
import { Meta } from "@components/common";
import { GlobalStyle } from "@styles/index";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <>
          <GlobalStyle />
          <Meta />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
