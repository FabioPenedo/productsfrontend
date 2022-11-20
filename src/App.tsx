import { Routes, Route} from 'react-router-dom';
import { Edit } from './pages/edit/Edit';
import { Home } from './pages/home/Home'
import { NotFound } from './pages/notFound/NotFound';
import { Register } from './pages/register/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/register' element={< Register />} />
        <Route path='/edit/:id' element={< Edit />} />
        <Route path='*' element={<NotFound />} /> 
      </Routes>
    </>
  )
};

export default App
