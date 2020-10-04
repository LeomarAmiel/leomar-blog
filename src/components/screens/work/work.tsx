import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Section, ListItem } from "./work.styles";
import { data } from "./work.data";

const ListItemHeading = styled.h5`
  font-size: 1.7rem;
  color: ${(p) => p.theme.text};
`;

const ListItemParagraph = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.text};
`;

const ListItemDate = styled.p`
  font-size: 1rem;
  margin-top: -0.2rem;
  margin-bottom: 0.4rem;
  color: ${(p) => p.theme.inactiveTabText};
`;

const Work: FC<unknown> = () => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Section>
      <ul>
        {data.map(({ company, date, description }, index) => (
          <ListItem
            opacity={opacity}
            delay={((index + 1) * 1000) / 3}
            key={company}
          >
            <ListItemHeading>{company}</ListItemHeading>
            <ListItemDate>{date}</ListItemDate>
            <ListItemParagraph>{description}</ListItemParagraph>
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};

export default Work;
