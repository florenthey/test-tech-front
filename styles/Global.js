import styled from "styled-components";

export const Inner = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || "5px"};
`;

export const WrapperDoubleSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 15px;
  background: whitesmoke;
  border-radius: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || "none"};
  background: ${({ background }) => background || "whitesmoke"};
  padding: 20px;
  border-radius: 10px;
  width: ${({ width }) => width || "none"};
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  justify-content: space-between;
  align-items: center;
  background: ${({ background }) => background || "#ebebeb"};
  padding: 15px 15px 15px 0;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
`;

export const A = styled.a`
  color: ${({ color }) => color || "#ec5990"};
`;

export const Select = styled.select`
  border: none;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 10px;
`;
