import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
`;

export const Subtitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  text-align: center;
  background: whitesmoke;
  border-radius: 10px;
  padding: 10px 40px 40px 40px;
  max-width: 1000px;
  box-shadow: 20px 50px 80px rgba(0, 0, 255, 0.1);
`;

export const PagesSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebebeb;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.2);
  transition: 0.2s;
  width: 100%;
  max-width: 285px;
  min-height: 200px;
  border-radius: 10px;
  padding: 40px 0 20px 0;
  &:hover {
    box-shadow: 8px 8px 2px 1px rgba(0, 0, 255, 0.2);
  }
`;
