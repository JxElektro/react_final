import '../index.css'
import All from './all';
import Html from './html';
import Css from './css';
import Jss from './js'
import React from './react';
import Error404 from './error';
import { Link, Route, } from "wouter";
import { Switch } from "wouter";

export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <Link href="/" className="title">helloWorld_</Link>
        <ul>
          <li>
            <Link href="/html">
              HTML
            </Link>
          </li>
          <li>
            <Link href="/css">
              CSS
            </Link>
          </li>
          <li>
            <Link href="/js">
              JavaScript
            </Link>
          </li>
          <li>
            <Link href="/react">
              React
            </Link>
          </li>
        </ul>


      </nav>
      <Switch>
        <Route exact path="/" component={All}></Route>
        <Route exact path="/html" component={Html}></Route>
        <Route exact path="/css" component={Css}></Route>
        <Route exact path="/js" component={Jss}></Route>
        <Route exact path="/react" component={React}></Route>
        <Route path="/:rest*" component={Error404}>
      </Route>
      </Switch>
      
    </div>
  )
}

