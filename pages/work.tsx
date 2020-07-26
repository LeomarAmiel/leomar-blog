import Nav from "@components/common/nav";
import Main from "@components/common/main";
import Work from "@screens/work";
import { Header } from "@components/common";

function BlogPage() {
  return (
    <div>
      <Header />
      <Nav />
      <Main>
        <Work />
      </Main>
    </div>
  );
}

export default BlogPage;
