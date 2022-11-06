import * as C from './style';
import EditImage from '../../assets/editar.png'
import DeleteImage from '../../assets/deletar.png'
import { Product } from '../../types/product';

type Props = {
  data: Product
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
          <C.LogoEdit src={EditImage} />
          <C.LogoDelete src={DeleteImage}/>
        </C.LogoEditAndDelete>
      </C.InfoData>
    </C.Data>
  )
}