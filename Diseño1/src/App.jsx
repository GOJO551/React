import { Formulario } from './Components/Formulario'
import { Home } from './Components/Home'
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [user,setUser] = useState([])
    return (
        <div>
            {
                !user.length > 0
                ?<Formulario setUser = {setUser}/>
                :<Home user = {user} setUser= {setUser}/> 
            }
        </div>
    )
}

export default App

