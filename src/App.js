import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Header from './Components/Header';

function App() {
  return (
    <>
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/Offers' element={<Offers/>}/>


  </Routes>
</Router>
    </>
  );
}

export default App;
