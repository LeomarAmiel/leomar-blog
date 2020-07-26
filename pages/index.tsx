import Nav from "@components/common/nav";
import Main from "@components/common/main";
import About from "@screens/about";
import Header from "@components/common/header";

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Main>
        <About />
      </Main>
    </div>
  );
}

export default Home;
