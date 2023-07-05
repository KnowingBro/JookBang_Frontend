import styled from "styled-components";

export const H1 = styled.h1`
  color: #1c1c1c;
  font-weight: bold;
  line-height: 130%;
  font-size: 48px;
  font-family: "Pretendard";
`;

export const P1 = styled.p`
  color: #525252;
  font-size: 20px;
`;

export const P2 = styled(P1)`
  color: #1c1c1c;
`;

export const Button = styled.button`
  font-size: 18px;
  color: white;
  background-color: #ff6c3e;
  width: 142px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 64px 0;
`;


export const ResultImage = styled.div`
  display: flex;
  height: 175px;
  gap: 20px;
  margin-bottom: 20px;
`