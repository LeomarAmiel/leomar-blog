import App from "next/app";
import ThemeProvider from "@context/themeProvider";
import { GlobalStyle } from "@styles/index";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { GA_TRACKING_ID } from "../../config";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <>
          <GlobalStyle />
          <Head>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
              }}
            />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/static/favicon.svg" />

            <meta property="title" content="Leomar Amiel | Software Engineer" />
            <meta
              property="description"
              content="Fullstack developer from the Philippines. Specializes in React, React Native, and Node"
            />

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

            <meta
              property="twitter:title"
              content="Leomar Amiel | Software Engineer"
            />
            <meta
              property="twitter:description"
              content="You need a website or app? I'm happy to help your team!"
            />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:image" content="/static/leomaramiel.jpeg" />
            <meta property="twitter:url" content="https://leomaramiel.tech/" />
            <meta name="twitter:site" content="@LeomarAmiel" />
            <meta name="twitter:creator" content="@LeomarAmiel" />

            <title>Leomar Amiel</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
