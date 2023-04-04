import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import './styles/partials/_global.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationPage type="Login"/>}/>
          <Route path='/signup' element={<RegistrationPage type="Sign up"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
