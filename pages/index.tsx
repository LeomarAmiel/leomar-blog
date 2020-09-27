import Main from "@components/common/main";
import About from "@screens/about";
import Header from "@components/common/header";

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <About />
      </Main>
    </div>
  );
}

export default Home;
