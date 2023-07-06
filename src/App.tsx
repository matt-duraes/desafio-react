import './App.css'
import { Header } from './components/Header/Header'
import { Pesquisa } from './components/Pesquisa/Pesquisa'
import { Tarefas } from './components/Tarefas/Tarefas'

function App() {

  return (
    <>
      <Header src="src/assets/logo.svg"/>
      <Pesquisa/>
      <Tarefas/>
  
    </>
  )
}

export default App
