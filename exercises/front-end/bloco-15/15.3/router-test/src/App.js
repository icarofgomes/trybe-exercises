import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App()  {
    return(
      <div className="App">
        <Link to="/">Início</Link>
        <Link to="/about">Sobre</Link>
        <br/>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route component={ NoMatch }  />
        </Switch>
      </div>
    )
}
