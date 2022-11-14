import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

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
  margin-top: 70px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  width: 1024px;
  height: 596px;
  background: #FFFFFF;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

export const InfoValue = styled.div`
  width: 100%;
  height: inherit;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
`;

export const Input = styled.input`
  background-color: inherit;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;

export const InputSubmit = styled.input`
  cursor: pointer;
  width: 250px;
  height: 60px;
  background-color: rgba(50, 70, 215);
  border-radius: 7px;
  border: 0;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;
  transition: all ease .2s;

    &:hover {
      background-color: rgba(50, 70, 215, .8);
    }
`;