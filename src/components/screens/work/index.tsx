import { FC } from "react";
import styled from "styled-components";
import * as S from "./work.styles";

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
  color: ${(p) => p.theme.inactiveTabText};
`;

const Work: FC<unknown> = () => {
  return (
    <S.Section>
      <S.UnorderedList>
        {/*  make it some kind of mapping of an array */}
        <S.ListItem>
          <ListItemHeading>CodeX Software Solutions</ListItemHeading>
          <ListItemDate>April 2020 - Present</ListItemDate>
          <ListItemParagraph>
            Working for a fintech company which specializes in wellbeing and
            creating an insurance journey.
          </ListItemParagraph>
        </S.ListItem>
        <S.ListItem>
          <ListItemHeading>YuLife</ListItemHeading>
          <ListItemDate>March 2019 - March 2020</ListItemDate>
          <ListItemParagraph>
            At the forefront of modernizing insurance by transforming
            traditional insurance products into life-enhancing experiences
            powered by the gamified wellbeing app.
          </ListItemParagraph>
        </S.ListItem>
        <S.ListItem>
          <ListItemHeading>Playbook</ListItemHeading>
          <ListItemDate>Jan 2019 - Feb 2020</ListItemDate>
          <ListItemParagraph>
            Playbook is the marketplace where you can find your favorite
            trainers, coaches and athletes where they can share their workouts
            and coach you.
          </ListItemParagraph>
        </S.ListItem>
        <S.ListItem>
          <ListItemHeading>PDAX</ListItemHeading>
          <ListItemDate>May 2018 - Jan 2019</ListItemDate>
          <ListItemParagraph>
            The first order-book exchange that gives Filipinos the opportunity
            to invest and trade digital assets and cryptocurrencies.
          </ListItemParagraph>
        </S.ListItem>
        <S.ListItem>
          <ListItemHeading>PDAX</ListItemHeading>
          <ListItemDate>May 2018 - Jan 2019</ListItemDate>
          <ListItemParagraph>
            Jumped from project to project, from doing mail migration to
            supporting a project management tool used by Accenture employees
            around the world.
          </ListItemParagraph>
        </S.ListItem>
      </S.UnorderedList>
    </S.Section>
  );
};

export default Work;
