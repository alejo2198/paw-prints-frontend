import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import './styles/partials/_global.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DogDetailsPage from './pages/DogDetailsPage./DogDetailsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationPage type="Login"/>}/>
          <Route path='/signup' element={<RegistrationPage type="Sign up"/>}/>
          <Route path='/dogDetails' element={<DogDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
