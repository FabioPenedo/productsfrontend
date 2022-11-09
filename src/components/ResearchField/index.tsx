import * as C from './style';
import LupaImage from '../../assets/lupa.png';
import { ChangeEvent, useState } from 'react';

//const [searchProduct, setSearchProduct] = useState('');

const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
  //setSearchProduct(e.target.value)
}

export const ResearchField = () => {
  return (
    <C.ResearchField>
      <C.Logo src={LupaImage} />
      <C.InputSearch placeholder='Busque pelo Produto' />
    </C.ResearchField>
  )
}