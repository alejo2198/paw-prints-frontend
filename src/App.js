import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import './styles/partials/_global.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DogDetailsPage from './pages/DogDetailsPage/DogDetailsPage';
import CRUDPawPostPage from './pages/CRUDPawPostPage/CRUDPawPostPage';
import PawPostPage from './pages/PawPostPage/PawPostPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationPage type="Login"/>}/>
          <Route path='/signup' element={<RegistrationPage type="Sign up"/>}/>
          <Route path='/dog-details' element={<DogDetailsPage/>}/>

          <Route path='/pawpost/add' element={<CRUDPawPostPage type="create"/>}/>
          <Route path='/pawpost/:id' element={<PawPostPage/>}/>
          <Route path='/pawpost/:id/edit' element={<CRUDPawPostPage type="edit"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
