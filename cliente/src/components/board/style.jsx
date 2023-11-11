import styled from "styled-components";
import { colorPalet } from "../../styles/global";

export const Container = styled.div`
  display: block;
  margin: auto 0;
`;

export const Board = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(3, 180px);
  gap: 15px;
  background-color: ${colorPalet.colorBaseWhite50};
  border: 10px solid ${colorPalet.colorBaseBlack100};
  padding: 40px;
  border-radius: 50px;

  @media (max-height: 700px) {
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(3, 150px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: -20px;
    right: 0px;
    bottom: -20px;
    z-index: -1;
    border: 20px solid ${colorPalet.colorBaseBlack100};
    border-radius: 50px;
  }
`;

export const Square = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  font-size: 190px;
  border: 5px solid ${colorPalet.colorBaseBlack100};
  cursor: pointer;
  user-select: none;
  background-color: ${colorPalet.colorBlueBlue10};
  border-radius: 8px;

  &:hover {
    background-color: ${colorPalet.colorBlueBlue50};
  }

  @media (max-height: 700px) {
    max-width: 150px;
    max-height: 150px;
  }
`;
