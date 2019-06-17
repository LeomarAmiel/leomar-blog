import Intro from "@components/intro/intro";
import Nav from "@components/common/nav/nav";
import Main from "@components/common/main/main";

function Home() {
  return (
    <div>
      <Intro />
      <Nav />
      <Main>
        <div style={{ height: "1000px" }} />
      </Main>
    </div>
  );
}

export default Home;
