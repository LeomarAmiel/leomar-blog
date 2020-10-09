import About from "@components/screens/about/about";
import { Head, Header, Main } from "@components/common";

function AboutPage() {
  return (
    <div>
      <Head canonicalUrl="https://leomaramiel.tech/" />
      <Header />
      <Main>
        <About />
      </Main>
    </div>
  );
}

export default AboutPage;
