import * as C from './style';
import React from 'react';
import EditImage from '../../assets/editar.png'
import DeleteImage from '../../assets/deletar.png'
import { Product } from '../../types/product';
import { api } from '../../api';

type Props = {
  data: Product
}

const handleClickEdit = () => {
  
}

const handleClickDelete = async (id: number) => {
  await api.deleteTheProduct(id)
  window.location.reload();
}


export const ProductItem = ({data}: Props) => {
  return (
    <C.Data>
      <C.InfoData>
        <C.DataName>
          <C.Name>{data.id}</C.Name>
          <C.Name>{data.name}</C.Name>
          <C.Name>{data.price}</C.Name>
          <C.Name>{data.inventory}</C.Name>
          <C.Name>{data.description}</C.Name>
        </C.DataName>
        <C.LogoEditAndDelete>
          <C.LogoEdit onClick={handleClickEdit} />
          <C.LogoDelete onClick={() => handleClickDelete(data.id)} />
        </C.LogoEditAndDelete>
      </C.InfoData>
    </C.Data>
  )
}