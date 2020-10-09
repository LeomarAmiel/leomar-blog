import Head from "next/head";

interface IProps {
  canonicalUrl: string;
}

function PageHead({ canonicalUrl }: IProps) {
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

export default PageHead;
