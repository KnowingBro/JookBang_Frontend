import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 140vh;
  padding: 0 123px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard";
`;

export const MainText = styled.div`
  width: 575px;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  line-height: 130%;
  font-size: 60px;
  font-weight: 800;
`;

export const Under = styled.div`
  width: 245px;
  height: 36px;
  background-color: #ff6c3e;
  border-radius: 8px;
  position: absolute;
  z-index: -1;
  margin-top: 42px;
`;

export const SubTitle = styled.h2`
  margin-top: 36px;
  width: 420px;
  color: #828282;
  font-size: 16px;
  text-align: center;
`;

export const Btn = styled.button`
  margin-top: 48px;
  width: 181px;
  height: 48px;
  background-color: #ff6c3e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
`;

export const MainImages = styled.div`
  margin-top: 160px;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Name = styled.div`
  font-size: 28px;
  color: #1c1c1c;
  margin-top: 24px;
  font-weight: bold;
  line-height: 140%;
  text-align: center;
`;
