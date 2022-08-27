import {Link} from 'wouter'
import './style.css'

function Css() {

  return (
    < div >
    <div className='main'>
    <h1>CSS</h1>
    <p>CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas.</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
  );
}

export default Css;