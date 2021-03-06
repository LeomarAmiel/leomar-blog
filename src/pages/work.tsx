import { Head, Header, Main } from "@components/common";
import Work from "@components/screens/work/work";

function WorkPage() {
  return (
    <div>
      <Head canonicalUrl="https://leomaramiel.tech/work" />
      <Header />
      <Main>
        <Work />
      </Main>
    </div>
  );
}

export default WorkPage;
