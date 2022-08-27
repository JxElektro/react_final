
import {Link} from 'wouter'
import './style.css'

function Error404() {

  return (
    < div >
    <div className='main'>
    <h1>404</h1>
    <p className="open">Esto es una Pagina de error.</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
  );
}

export default Error404;