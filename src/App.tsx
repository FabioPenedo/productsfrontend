import * as C from './App-styles';
import { Routes, Route} from 'react-router-dom';
import { Edit } from './pages/Edit';
import { Home } from './pages/Home'

const App = () => {
  return (
    <C.Container>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/edit' element={< Edit />} />
      </Routes>
    </C.Container>
  )
};

export default App
