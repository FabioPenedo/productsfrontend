import * as C from './style';
import notFound from '../../../public/notfound.svg';

export const NotFound = () => {
  return (
    <C.Container>
      <C.Logo src={notFound} />
    </C.Container>
  )
};