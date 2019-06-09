import styled from "styled-components";

const Intro = styled.aside`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 160px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  object-fit: contain;
`;

const TextWrapper = styled.div`
  padding-left: 20px;
`;

const Text = styled.div`
  margin: 0;
`;

export { Intro, Image, TextWrapper, Text };
