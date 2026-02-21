import './App.css'
import MyApps from './Componants/MyApps'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import LandingPage from './Pages/LandingPage.jsx'
function App() {

  return (
    <>

  <Routes >
    {/* <Route path='/' element = {<Home/>}/> */}
    <Route path='/' element = {<LandingPage/>}/>
    <Route path='/myapps' element = {<MyApps/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/myapps' element = {<MyApps/>}/>
    <Route path='/myapps' element = {<MyApps/>}/>
    <Route path='/login' element = {<Login/>}/>

  </Routes>


    </>
  )
}

export default App
