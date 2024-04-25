import { ReactElement } from 'react'
import './Home.css'
import logoDecolar from '../assets/decolar-logo-2019.svg'
import { Link } from 'react-router-dom'

function App(): ReactElement {

  return (
    
    <div className='ajust_container teste'>
      <img className='logo' src={logoDecolar} alt="Logo da decolar" />
      <h1 className='titulo'>POC - Buscador</h1>
      <p className='texto'>Bem-vindo 😀</p>
      <button className='botao'><Link to="/buscador">Acessar tela de busca</Link></button>
    </div>
  )
}

export default App
