import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: ${(props) => props.theme.maxWidth};
  margin: auto 50px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin: 5px;
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  padding: 15px 15px 15px 0;
  border-radius: 10px;
  margin: 5px;
`;

export const TitleSection = styled.div`
  font-weight: bold;
`;

export const A = styled.a`
  color: #ec5990;
`;
