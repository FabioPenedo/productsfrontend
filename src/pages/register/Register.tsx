import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api';
import * as C from './style';

export const Register = () => {

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

  const handleAddProducts = async () => {
    if(product && price && inventory && description) {
      let json = await api.addNewProduct(product, price, inventory, description)
      console.log(json)
      //console.log(product, parseFloat(price), parseInt(inventory), description)
    } else {
      alert('Precisa ser preenchido!')
    }
  }
  return (
    <C.Container>
      <C.UpSide>
        <C.StockName>Produtos / Registrar</C.StockName>
      </C.UpSide>
      <C.MiddlePart>
        <C.Info>
          <C.InfoValue>
            <C.Form>
              <C.Input value={product} onChange={handleProduct.product} type="text" placeholder='Produto' />
              <C.Input value={price} onChange={handleProduct.price} type="number" placeholder='Preço' />
              <C.Input value={inventory} onChange={handleProduct.inventory} type="number" placeholder='Invetário' />
              <C.Input value={description} onChange={handleProduct.description}  type="text" placeholder='Descrição' />
              <C.InputSubmit onClick={handleAddProducts}>Registrar</C.InputSubmit> 
            </C.Form>
          </C.InfoValue>
        </C.Info>
      </C.MiddlePart>
    </C.Container>
  )
}