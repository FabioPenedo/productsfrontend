import * as C from './style';
import LupaImage from '../../assets/lupa.png';
import { ChangeEvent, useState } from 'react';
import { filteredProduct } from '../../helpers/filterProduct';

export const ResearchField = () => {

  const [searchProduct, setSearchProduct] = useState('');

  const handleSearchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value)
    //filteredProduct(searchProduct)
  }

  return (
    <C.ResearchField>
      <C.Logo src={LupaImage} />
      <C.InputSearch placeholder='Busque pelo Produto' onChange={handleSearchProduct} />
    </C.ResearchField>
  )
}