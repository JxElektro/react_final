import './style.css'
import {Link} from 'wouter'

function Html() {

  return (
    < div >
    <div className='main'>
    <h1>HTML</h1>
      <p>El lenguaje de marcado de hipertexto (HTML) es un lenguaje informático que forma parte de la mayoría de las páginas web y aplicaciones en línea. Un hipertexto es un texto que se utiliza para enlazar con otros textos, mientras que un lenguaje de marcado es una serie de marcas que indican a los servidores web la estructura y el estilo de un documento.</p>
    </div >
    <Link href='/'>
    <button>Volver a Incio</button>
    </Link>
    </div>
  );
}

export default Html;