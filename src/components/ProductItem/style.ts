import styled from "styled-components";

export const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
`;

export const InfoData = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  height: 164px;
  margin-bottom: 20px;
  background: rgba(105, 101, 254, 0.1);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const DataName = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex: 1;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: 'Poppins';
  font-weight: 275;
  font-size: 24px;
  color: #000000;
`;

export const NameData = styled.div`
  font-family: 'Poppins';
  font-weight: 275;
  font-size: 24px;
  color: #000000;
`;

export const LogoEditAndDelete = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const LogoEdit = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const LogoDelete = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;