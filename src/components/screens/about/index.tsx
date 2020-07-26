import Paragraph from "@components/common/paragraph";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.6rem;
`;

const InnerWrapper = styled.div`
  padding: 1.2rem 0;
`;

export default function About() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Paragraph>CODER X</Paragraph>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>
          First work was with Accenture where I was tasked with doing mail
          migrations. While I was with Accenture, I started doing{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreeCodeCamp
          </a>
          . I also started hosting some of my code in{" "}
          <a
            href="https://codepen.io/LeomarAmiel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
          . I know that my code was shitty back then. But hey, I was learning.
        </Paragraph>
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
