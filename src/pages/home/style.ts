import styled from "styled-components";
import EditImage from './assets/editar.png'
import NewImage from './assets/mais.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

export const Button = styled.button`
  z-index: 999;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 7px 7px;
  padding: 15px 15px;
  cursor: pointer;
  background-color: rgba(53, 70, 215, 0.7);
  color: #FFF;
  border: 0;
  border-radius: 5px;
  transition: all .5s ease;

    &:hover {
      background-color: rgba(53, 70, 215)
    }
`

export const UpSide = styled.div`
  width: auto;
  height: 136px;
  background: linear-gradient(180deg, #6965FE 22.4%, #3546D7 55.73%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const StockName = styled.h1`
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 48px;
  text-align: center;
  color: #FFFFFF;
`;

export const MiddlePart = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoValue = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  height: 143px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 32px;
  color: #000000;
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 20px;
`;




