import { FC, useState, useEffect } from "react";
import {
  Section,
  ListItem,
  ListItemDate,
  ListItemHeading,
  ListItemParagraph,
} from "./work.styles";
import { data } from "./work.data";

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
