import Paragraph from "@components/common/paragraph";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.6rem;
  padding-left: 6rem;
`;

const InnerWrapper = styled.div`
  padding: 1.2rem 0;
`;

const BigHey = styled(Paragraph)`
  font-size: 2.4rem;
  font-weight: bold;
  font-style: italic;
`;

export default function About() {
  return (
    <Wrapper>
      <InnerWrapper>
        <BigHey>Hey!</BigHey>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>Welcome to my website!</Paragraph>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>
          After my stint with Accenture, I took time off working to continue
          learning JavaScript &amp; started coding with React. Had a good friend
          of mine mentor me for a few months. And started my first job with{" "}
          <a
            href="https://www.pdax.ph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDAX
          </a>{" "}
          where we built an Exchange.
        </Paragraph>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>
          I am now working with Aurity full time as a remote React Native
          developer. I help create &amp; maintain applications for different
          clients.
        </Paragraph>
      </InnerWrapper>
    </Wrapper>
  );
}
