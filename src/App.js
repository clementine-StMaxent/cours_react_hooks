import logo from './logo.svg';
import './App.css';
import { ButtonExo } from './component/ButtonExo'
import { ListeUser } from './component/Utilisateur/ListeUser';
import { Creation } from './component/cycle de vie/Creation';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Formulaire } from './routing/page/Formulaire';
import { Accueil } from './routing/page/Accueil';
import { Users } from './routing/page/Users';
import {Navlink} from 'react-router-dom'
import { Navbar } from './routing/page/Navbar';

function App() {

  // const noms = ['Clem', 'Umberto', 'Laurent']

  // const handleClick = () => {
  //   alert("coucou")
  // }


  const pages = [
    {href:"/accueil" , name:"Accueil"},
    {href:"/formulaire" , name:"Formulaire"},
    {href:"/users" , name:"Users"}
  ]

  return (
    <>
      {/* <ButtonExo onClick={handleClick}>Coucou</ButtonExo> */}
      <div className="App">
        {/* <ListeUser noms={noms} /> */}
        {/* <Creation /> */}
      </div>



      <Router>
      <Navbar pages={pages}/>
        <div>
          <a href="/accueil"> Accueil</a>
          <a href="/formulaire"> Formulaire</a>
          <a href="/users"> Users</a>
        </div>
        <Switch>
          <Route path="/accueil">
            <Accueil />
          </Route>
          <Route path="/formulaire">
            <Formulaire />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
        <Redirect exact path="/" to="/accueil"/>
      </Router>

    </>
  )
}

export default App;
