import styled from "styled-components";
import { colorPalet } from "../../styles/global";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    font-size: 20px;
    outline: none;
    border: 1px solid ${colorPalet.colorYellowYellow50};
    border-radius: 7px;
    padding: 0 15px;
    transition: 0.3s;

    &:focus {
        box-shadow: 0 0 0 1px ${colorPalet.colorYellowYellow50};
    }
`

export const HolderButton = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 20px;

    & > button {
        height: 40px;
        font-size: 15px;
        background-color: ${colorPalet.colorYellowYellow50};
        color: ${colorPalet.colorBaseBlack100};
        border: none;
        border-radius: 7px;
        outline: none;
        transition: 0.3s;
        padding: 0 15px;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            background-color: ${colorPalet.colorYellowYellow100};
        }
    }
`

export const Winner = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: ${colorPalet.colorYellowYellow100};
    display: flex;
    flex-direction: column;

    & > div {
       text-align: right;
       color: ${colorPalet.colorYellowYellow50};
       font-size: 20px;
    }  

`
