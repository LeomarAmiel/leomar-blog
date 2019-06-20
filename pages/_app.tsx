import App, { Container } from "next/app";
import Page from "@components/containers/page.container";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}
