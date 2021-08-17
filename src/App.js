import logo from './logo.svg';
import './App.css';
import { ButtonExo } from './component/ButtonExo'
import { ListeUser } from './component/Utilisateur/ListeUser';
import { Creation } from './component/cycle de vie/Creation';

function App() {

  const noms = ['Clem', 'Umberto', 'Laurent']

  // const handleClick = () => {
  //   alert("coucou")
  // }

  return (
    <>
      {/* <ButtonExo onClick={handleClick}>Coucou</ButtonExo> */}
      <div className="App">
        {/* <ListeUser noms={noms} /> */}
        <Creation />
      </div>
    </>
  )
}

export default App;
