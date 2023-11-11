import styled from "styled-components";
import { colorPalet } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  height: 670px;
  align-self: center;

  @media (max-height: 700px) {
    height: 580px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-size: 30px;
    margin: 0;
    color: ${colorPalet.colorYellowYellow700};
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${colorPalet.colorBlueBlue10};
  width: 200px;
  border-radius: 15px;
  padding: 10px;
  border: 5px solid ${colorPalet.colorBaseBlack100};
  color: ${colorPalet.colorYellowYellow50};
  font-weight: 400;
  font-size: 15px;
  font-family: Iter, sans-serif;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colorPalet.colorYellowYellow10};
  padding: 10px;
  color: ${colorPalet.colorYellowYellow700};
  border-radius: 4px;
  border: 1px solid ${colorPalet.colorYellowYellow100};

  & > span {
    display: flex;
    align-items: center;
    gap: 10px;

    & > svg {
      color: ${colorPalet.colorYellowYellow100};
    }

    & > img {
      width: 20px;
    }
  }
`;
