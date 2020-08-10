import Main from "@components/common/main";
import About from "@screens/about";
import Header from "@components/common/header";
import Paragraph from "@components/common/paragraph";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  flex: 1 0 40%;
  min-width: 30rem;
  background-color: #fed686;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 0 120px 120px 0;
`;

const CardColor = styled.div`
  position: absolute;
  width: 22.5rem;
  right: -4rem;
  margin-top: -8rem;
  background-color: #feeac2;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
`;

const Image = styled.img`
  height: 12.5rem;
  width: 12.5rem;
  margin: 1.2rem 0;
  border-radius: 50%;
`;

const DataWrapper = styled.div`
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 0.2rem solid #7fc7a3;
  padding-bottom: 0.4rem;
  margin-bottom: 0.4rem;
`;

const NameParagraph = styled(Paragraph)`
  font-size: 1.8rem;
  margin-top: 1.6rem;
`;

const TitleParagraph = styled(Paragraph)`
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`;

const SocialMediaWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 0 0 0.4rem 0.4rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin: 0 0.6rem;
`;

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <StyledWrapper>
          <StyledDiv>
            <CardColor>
              <DataWrapper>
                <Image src="/static/leomaramiel.jpeg" alt="my picture" />
                <NameWrapper>
                  <NameParagraph>Leomar Alejar</NameParagraph>
                </NameWrapper>
                <TitleParagraph>JavaScript Developer</TitleParagraph>
              </DataWrapper>
              <SocialMediaWrapper>
                <IconWrapper>
                  <FontAwesomeIcon size="2x" fixedWidth icon={faTwitter} />
                </IconWrapper>
                <IconWrapper>
                  <FontAwesomeIcon size="2x" fixedWidth icon={faLinkedinIn} />
                </IconWrapper>
                <IconWrapper>
                  <FontAwesomeIcon size="2x" fixedWidth icon={faGithub} />
                </IconWrapper>
              </SocialMediaWrapper>
            </CardColor>
          </StyledDiv>
          <About />
        </StyledWrapper>
      </Main>
    </div>
  );
}

export default Home;
