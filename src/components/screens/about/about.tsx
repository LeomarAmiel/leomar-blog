import { Paragraph } from "@components/common";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20%;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;

const InnerWrapper = styled.div`
  padding: 1.2rem 0;
`;

const BigHey = styled(Paragraph)`
  font-size: 2.4rem;
  font-weight: bold;
  font-style: italic;
`;

const Image = styled.img`
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.active};
  background-color: ${({ theme }) => theme.active};
  height: 14rem;
  width: 14rem;
  margin-right: 3.8rem;
  @media (max-width: 900px) {
    margin: 2.8rem;
  }
`;

const About: FC<unknown> = () => {
  return (
    <Wrapper>
      <Image alt="My Yumoji" src="/static/yumoji.png" />
      <div>
        <InnerWrapper>
          <BigHey>Heyyy!</BigHey>
        </InnerWrapper>
        <InnerWrapper>
          <Paragraph>
            Welcome to my website! This site is pretty bare bones for now. Hope
            you bear with it for now!{" "}
          </Paragraph>
        </InnerWrapper>
        <InnerWrapper>
          <Paragraph>
            I&apos;m a software engineer based in the Philippines! I have been
            developing websites and apps for over 3 years now. I mainly do React
            &#038; React Native. I also ❤️ using TypeScript!
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
      </div>
    </Wrapper>
  );
};

export default About;
