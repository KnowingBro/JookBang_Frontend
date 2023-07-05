import styled from "styled-components";

export const Container = styled.div`
  .primary {
    background-color: #ff6c3e;
    color: white;
  }

  .gray {
    background-color: #efefef;
    color: #828282;
  }
`;

export const Wrap = styled.div`
  width: 234px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 106px;
  height: 40px;
  font-size: 16px;
  line-height: 130%;
  padding: 9.5px 16px;
  border-radius: 8px;
`;
