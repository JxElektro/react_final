import {Link} from 'wouter'
import './style.css'
function Jss() {

  return (
    < div >
    <div className='main'>
    <h1>JavaScript</h1>
    <p>JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. Como lenguaje de scripting del lado del servidor, se trata de una de las principales tecnologías de la World Wide Web.</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
    );
}

export default Jss;