
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import {useAuthContext} from "./hooks/useAuthContext"
import { Dashboard } from './pages/Dashboard';
import { Search } from './pages/Search';
import { Addwordle } from './pages/AddWordle';
import { Contact } from './pages/Contact';
function App() {
  const {user,authIsReady}= useAuthContext() 
  return (
    <div className="mx-52 mt-4 font-body">
      {authIsReady &&
      <BrowserRouter>
        <div className="grid grid-cols-4">
          <div>
            <Sidebar/>
          </div>
          <div className="col-span-3">
            <Routes>
              <Route path="/" element={
              !user ?<Homepage/>:<Navigate to='/dashboard'></Navigate>}></Route>
              <Route path="/login" element={
              !user ?<Login/>:<Navigate to ='/dashboard'></Navigate>}></Route>
              <Route path="/signup" element={
              !user ?<Signup/>:<Navigate to ='/dashboard'></Navigate>}></Route>
              <Route path="/dashboard" element={
                user?<Dashboard/>:<Navigate to="/login"/>}></Route>
              <Route path="/search" element={
                user ? <Search/>:<Navigate to='/login'></Navigate>}></Route>
              <Route path="/add" element={
                user?<Addwordle/>:<Navigate to="/login"/>}></Route>
              <Route path='/contact-us' element={
                <Contact/> 
              }></Route>
            </Routes>
          </div>
        </div>
      
      </BrowserRouter>
}
    </div>
  );
}

export default App;
