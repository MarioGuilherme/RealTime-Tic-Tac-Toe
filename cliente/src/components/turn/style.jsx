import { styled } from "styled-components";
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
  gap: 10px;
  justify-content: space-between;
  flex-direction: column;
`;

export const Holder = styled.div`
  text-align: center;

  & > p {
    font-size: 30px;
    margin: 10px;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: ${colorPalet.colorBlueBlue200};
  width: 200px;
  padding: 20px 40px;
  border-radius: 20px;
  border: 5px solid ${colorPalet.colorBaseBlack100};
  color: ${colorPalet.colorYellowYellow50};
  font-weight: 700;
  font-size: 30px;

  & > span {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
