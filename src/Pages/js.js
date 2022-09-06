import {Link} from 'wouter'
import './style.css'
function Jss() {

  return (
    < div >
    <div className='main'>
    <h1>Programación</h1>
    <p>Aca van Proyectos Responsivos</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
    );
}

export default Jss;