import Intro from "@components/intro/intro";
import Nav from "@components/common/nav/nav";
import Main from "@components/common/main/main";
import About from "@components/about/about";
import { useTabs } from "@store/activeTab";
import Work from "@components/work/work";

function Home() {
  const tabs = useTabs("about");
  return (
    <div>
      <Intro />
      <Nav {...tabs} />
      <Main>
        {tabs.value === "about" ? <About /> : null}
        {tabs.value === "work" ? <Work /> : null}
      </Main>
    </div>
  );
}

export default Home;
