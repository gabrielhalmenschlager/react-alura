import './App.css';
import Logo from './componentes/Logo' 
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'
import OpcoesHeader from './componentes/OpcoesHeader'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>

      </header>
    </div>
  );
}

export default App