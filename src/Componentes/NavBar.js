import All from '../Pages/all';
import Html from '../Pages/html';
import Alfa from '../Pages/Alfa';
import Jss from '../Pages/js'
import Contact from '../Pages/Contact';
import Error404 from './error';
import { Link, Route, } from "wouter";
import { Switch } from "wouter";

export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <Link href="/" className="title"><img width="100px" height="100px" src="https://images2.imgbox.com/46/8f/pCbhuR5w_o.png" alt="Logo" /></Link>
        <ul className="nav2">
          <li>
            <Link href="/html">
              Web
            </Link>
          </li>
          <li>
            <Link href="/Alfa">
              Animacion
            </Link>
          </li>
          <li>
            <Link href="/js">
              Programacion
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              Contacto
            </Link>
          </li>
        </ul>


      </nav>
      <Switch>
        <Route exact path="/" component={All}></Route>
        <Route exact path="/html" component={Html}></Route>
        <Route exact path="/Alfa" component={Alfa}></Route>
        <Route exact path="/js" component={Jss}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route path="/:rest*" component={Error404}>
        </Route>
      </Switch>

    </div>
  )
}

