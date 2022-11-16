import * as C from './style';
import { Product } from '../../types/product';
import { api } from '../../api';
import { Link } from 'react-router-dom';

type Props = {
  data: Product
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
          <Link to="/edit"><C.LogoEdit /></Link>
          <C.LogoDelete onClick={() => handleClickDelete(data.id)} />
        </C.LogoEditAndDelete>
      </C.InfoData>
    </C.Data>
  )
}