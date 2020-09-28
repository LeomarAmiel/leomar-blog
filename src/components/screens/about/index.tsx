import Paragraph from "@components/common/paragraph";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20%;
`;

const InnerWrapper = styled.div`
  padding: 1.2rem 0;
`;

const BigHey = styled(Paragraph)`
  font-size: 2.4rem;
  font-weight: bold;
  font-style: italic;
`;

const About: FC<unknown> = () => {
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
          I&apos;m a software engineer! I have been developing websites and apps
          for over 3 years now. I mainly do React &#038; React Native. I also ❤️
          using TypeScript!
        </Paragraph>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>
          In my free time, I mostly play with my friends online (given that
          we&apos;re in the pandemic). I do my own espresso at home which is
          kinda cool for me. It probably doesn&apos;t taste that good but
          it&apos;s good enough for me!
        </Paragraph>
      </InnerWrapper>
    </Wrapper>
  );
};

export default About;
