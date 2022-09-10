
import {Link} from 'wouter'
import './style.css'

function Error404() {

  return (
    < div >
    <div className='main'>
    <h1>404</h1>
    <p className="open">Ups... Parece que esta ruta no funciona, vuelve a inicio e intentalo de nuevo.</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
  );
}

export default Error404;