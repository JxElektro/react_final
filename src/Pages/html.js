import './style.css'
import {Link} from 'wouter'

function Html() {

  return (
    < div >
    <div className='main'>
    <h1>Web</h1>
      <p>Maquetado responsivo de sitios Web para su empresa o su marca personal
     

      "Proyectos web"</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
  );
}

export default Html;