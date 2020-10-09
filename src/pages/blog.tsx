import { Head, Header, Main } from "@components/common";
import Blog from "@components/screens/blog/blog";

function WorkPage() {
  return (
    <div>
      <Head canonicalUrl="https://leomaramiel.tech/blog" />
      <Header />
      <Main>
        <Blog />
      </Main>
    </div>
  );
}

export default WorkPage;
