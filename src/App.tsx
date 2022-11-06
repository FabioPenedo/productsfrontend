import * as C from './App-styles';
import LupaImage from './assets/lupa.png';
import { useEffect, useState } from 'react';
import { Product } from './types/product';
import { api } from './api';
import { ProductItem } from './components/ProductItem';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    listProducts()
  }, []);

  const listProducts = async () => {
    setLoading(true)
    let json = await api.getAllProducts();
    setLoading(false);
    setProducts(json.products);
  }
  
  return (
    <C.Container>
      <C.UpSide>
        <C.StockName>Produtos</C.StockName>
        <C.researchField>
          <C.Logo src={LupaImage} />
          <C.InputSearch placeholder='Busque pelo Produto' />
        </C.researchField>
      </C.UpSide>
      {loading &&
        <C.Loading>Carregando...</C.Loading>
      }
      {!loading && products.length > 0 &&
        <C.MiddlePart>
        <C.Info>
          <C.InfoValue>
            <C.Value>ID</C.Value>
            <C.Value>Nome</C.Value>
            <C.Value>Preço</C.Value>
            <C.Value>Inventário</C.Value>
            <C.Value>Descrição</C.Value>
          </C.InfoValue>
        </C.Info>
        {products.map((item) => (
          <ProductItem data={item} />
        ))}
      </C.MiddlePart>
      }
    </C.Container>
  )
};

export default App
