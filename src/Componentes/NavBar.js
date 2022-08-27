import '../index.css'
import All from './all';
import Html from './html';
import Css from './css';
import Jss from './js'
import React from './react';
import { Link, Route } from "wouter";


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
      <Route path="/" component={All}></Route>
      <Route path="/html" component={Html}></Route>
      <Route path="/css" component={Css}></Route>
      <Route path="/js" component={Jss}></Route>
      <Route path="/react" component={React}></Route>
    </div>
    )}

