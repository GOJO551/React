import "./Formulario.css"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export function Formulario({setUser}) {
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [error,setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (nombre == "" || contraseña == ""){
      //alert('ingrese a validar')
      setError(true)
      return
    }
    
    setError(false)
    
    //alert("1"+setUser+"Nombre es:"+nombre)
    //serUser = ([nombre])
    setUser ([nombre])
    //alert ("2"+setUser)

  } 

  return (
    <section>
      <h1>Ingreso de Usuarios</h1>
      <form 
        className="formulario" 
        onSubmit={handleSubmit}
      >
        
        <input
          type="text"
          placeholder="Usuario"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(event) => setContraseña(event.target.value)}
        />
         <br></br>
        <button type="submit" class="btn btn-warning" >Iniciar Sesión</button>
       
      </form>
      {error && <p>¡Todos los campos son obligatorios!</p>}
    </section>
  )
}
