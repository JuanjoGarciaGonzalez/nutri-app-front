import React, {useState} from 'react'
import './App.css'

function App() {

  const [data, setData] = useState(null)

  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  fetch('http://localhost:8080/api/test', options)
    .then(response => response.json())
    .then(data => setData(data))

  return (
    <>
      <h1>Bienvenido a la aplicación de Nutrición!</h1>
      <p>{data ? data.message : 'Cargando...'}</p>
    </>
  )
}

export default App
