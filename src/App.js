import './App.css';
import {BrowserRouter , Route , Routes , Redirect, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './pages/AddPost';
import PostDesc from './pages/PostDesc';
import Sharepost from './pages/Sharepost';
import Shares from './pages/Shares';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
       <ToastContainer />
         <BrowserRouter>
             <Routes>

                <Route path='/' element={<ProtectedRouted><Home /></ProtectedRouted>}/>
                <Route path='/sharepost/:id' element={<ProtectedRouted><Sharepost /></ProtectedRouted>}/>
                <Route path='/shares' element={<ProtectedRouted><Shares /></ProtectedRouted>}/>
                <Route path='/profile/:id' element={<ProtectedRouted><Profile /></ProtectedRouted>}/>
                <Route path='/home' element={<ProtectedRouted><Home /></ProtectedRouted>}/>
                <Route path='/addpost' element={<ProtectedRouted><AddPost /></ProtectedRouted>}/>
                <Route path='/post/:id' element={<ProtectedRouted><PostDesc /></ProtectedRouted>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>

             </Routes>
         </BrowserRouter>
    </div>
  );
}



function ProtectedRouted({children}){

   if(localStorage.getItem('sheygram-lite-user'))
   {
       return children
   }else{
     return <Navigate to='/login'/>
   }

}
export default App;
