import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCardGrid = styled.div`
  background: linear-gradient(#722182, #e7425f);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 4rem;
  color: #1e1e1e;
  margin-bottom: 20px;
  & > span {
    background-image: linear-gradient(#0000 0, #eaaa02 0);
    background-repeat: repeat-x;
    background-size: 2px 7px;
    display: inline;
    background-position: 0 77%;
  }
`;

export const Card = styled(Link)`
  flex: 0 0 25%;
  background-color: transparent;
  border: 3px solid #fff;
  border-top-width: 0;
  border-left-width: 0;
  width: 217.5px;
  height: 162px;
  z-index: 1;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  & > * {
    transition: all 0.3s ease;
  }
  & > img {
    height: 65px;
    width: 65px;
  }
  &:hover {
    cursor: pointer;
    & > * {
      transform: scale(1.1) translate3d(0, 0, 0);
    }
  }
  @media screen and (max-width: 768px) {
    flex: 0 0 50%;
  }
`;
