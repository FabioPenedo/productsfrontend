import styled from "styled-components";


export const ResearchField = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35px;
  margin-right: 20px;
`;

export const InputSearch = styled.input`
  background-color: inherit;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 24px;
  color: #FFFFFF;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #FFFFFF;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
`;