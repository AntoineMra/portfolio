import React from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import './styles/App.css'
// BEGIN Import des Pages

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Compétence from './pages/Compétence'
import Projets from './pages/Projets'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './components/footer/Footer';

// END


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/skills' component={Compétence}/>
          <Route path='/project' component={Projets}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/contact' component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;