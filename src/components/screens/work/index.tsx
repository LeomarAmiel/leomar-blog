import Paragraph from "@components/common/paragraph";
import { FC } from "react";
import styled from "styled-components";
import * as S from "./work.styles";

const Heading4 = styled(Paragraph)`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;

const Work: FC<unknown> = () => {
  return (
    <S.Section>
      <Heading4>Wear your helmet! ⛑</Heading4>

      <Paragraph>
        🚧 This part is of my website is still <b>in progress</b>. Steer clear
        of the area! 🚧
      </Paragraph>
    </S.Section>
  );
};

export default Work;
