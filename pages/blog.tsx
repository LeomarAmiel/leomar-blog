import Main from "@components/common/main";
import Blog from "@screens/blog";
import { Header } from "@components/common";

function BlogPage() {
  return (
    <div>
      <Header />
      <Main>
        <Blog />
      </Main>
    </div>
  );
}

export default BlogPage;
