import * as C from './style';

export const Register = () => {
  return (
    <C.Container>
      <C.UpSide>
        <C.StockName>Produtos / Registrar</C.StockName>
      </C.UpSide>

      <C.MiddlePart>
        <C.Info>
          <C.InfoValue>
            <C.Form action="/" method="post">
              <C.Input type="text" placeholder='Produto' />
              <C.Input type="number" placeholder='Preço' />
              <C.Input type="number" placeholder='Invetário' />
              <C.Input type="text" placeholder='Descrição'/>
              <C.InputSubmit type="submit" value="Registrar" />
            </C.Form>
          </C.InfoValue>
        </C.Info>
      </C.MiddlePart>
    </C.Container>
  )
}