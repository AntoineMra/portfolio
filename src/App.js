import React from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import './styles/App.css'

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Compétence from './pages/Compétence'
import Projets from './pages/Projets'
import Bts from './pages/bts/Bts'
import BtsStage from './pages/bts/BtsStage'
import BtsProjets from '../src/pages/bts/BtsProjets'
import BtsVeille from './pages/bts/BtsVeille'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/skills' component={Compétence}/>
          <Route path='/project' component={Projets}/>
          <Route path='/bts' component={Bts}/>
          <Route path='/projetsScolaire' component={BtsProjets}/>
          <Route path='/veille' component={BtsVeille}/>
          <Route path='/stage' component={BtsStage}/>
          <Route path='/contact' component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter> 
      <Footer/>
    </>
  );
};

export default App;