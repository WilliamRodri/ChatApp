import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  outline: none;
  font-size: 15px;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 31px -36px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 31px -36px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 31px -36px rgba(0,0,0,0.75);
`;

export const Span = styled.span`
  padding: 10px;
`;

export const Logo = styled.img`
  width: 350px;
`;