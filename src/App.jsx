// export default function App() {
//     return (
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     )
//   }


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home'
import LandingPage from './Pages/LandingPage'
import {Route, Routes} from 'react-router-dom'
import IndukAyam from "./Pages/Induk-ayam";
import State from './Pages/state'
import UseEffect from './Pages/UseEffect'
import UpdateState from './Components/UpdateState'
import Timer from './Components/Timer'
import Fetch from './Components/Fetch'
// import ReactContext from './Pages/ReactContext'
import GetMahasiswa from './Components/admin/GetMahasiswa'
import CreateMahasiswa from './Components/admin/CreateMahasiswa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/IndukAyam" element={<IndukAyam/>}/>
      <Route path="state" element={<State/>}/>
      <Route path="/UseEffect" element={<UseEffect/>}/>
      <Route path="/UpdateState" element={<UpdateState/>}/>
      <Route path="/Timer" element={<Timer/>}/>
      <Route path="/Fetch" element={<Fetch/>}/>
      {/* <Route path="/ReactContext" element={<ReactContext/>}/> */}
      <Route path="/Get" element={<GetMahasiswa/>}/>
      <Route path="/insert" element={<CreateMahasiswa/>}/>
    </Routes>
    </>
  )
}

export default App
