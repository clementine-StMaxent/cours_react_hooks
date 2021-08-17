import logo from './logo.svg';
import './App.css';
import { ButtonExo } from './component/ButtonExo'

function App() {

  const handleClick = () => {
    alert("coucou")
  }
  return (
    <>
      <ButtonExo onClick={handleClick}>Coucou</ButtonExo>
    </>
  );
}

export default App;
