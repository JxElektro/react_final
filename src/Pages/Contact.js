import { Link } from 'wouter'
import './style.css'
import React from 'react';
import Askme from '../Componentes/form'

function Contact() {

  return (
    <div>
      < div className='main'><h1>Contacto</h1>
      <Askme />
      </div >
      <Link href='/'>
        <button className="back">Volver a Incio</button>
      </Link>
    </div>

  );
}

export default Contact;