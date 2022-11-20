import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { api }  from '../../api';
import * as C from './style';

export const Edit = () => {
  const params = useParams().id

  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [inventory, setInventory] = useState('')
  const [description, setDescription] = useState('')

  const handleProduct = {
    product: (e: ChangeEvent<HTMLInputElement>) => setProduct(e.target.value),
    price: (e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value),
    inventory: (e: ChangeEvent<HTMLInputElement>) => setInventory(e.target.value),
    description: (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)
  };

  const handleEditProducts = async () => {
    if(params) {
      if(product && price && inventory && description) {
        await api.updateProductData(params, product, price , inventory , description)
        setProduct('')
        setPrice('')
        setInventory('')
        setDescription('')
        alert('Atualizado com sucesso!')
      } else {
        alert('Precisa ser preenchido!')
      }
    } 
  }

  return (
    <C.Container>
      <C.UpSide>
        <C.StockName>Produtos / Editar</C.StockName>
      </C.UpSide>

      <C.MiddlePart>
        <C.Info>
          <C.InfoValue>
            <C.Form>
              <C.Input type="text" placeholder='Produto' onChange={handleProduct.product} value={product} />
              <C.Input type="number" placeholder='Preço' onChange={handleProduct.price} value={price} />
              <C.Input type="number" placeholder='Invetário' onChange={handleProduct.inventory} value={inventory} />
              <C.Input type="text" placeholder='Descrição' onChange={handleProduct.description} value={description} />
              <C.InputSubmit onClick={handleEditProducts}>Editar</C.InputSubmit>
            </C.Form>
          </C.InfoValue>
        </C.Info>
      </C.MiddlePart>
    </C.Container>
  )
}