import { Link } from 'wouter'
import './style.css'
import React from 'react';
import Askme from '../Componentes/form'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contact() {

  return (
    <div id='icon'>
      < div className='main'><h1>Contacto</h1>
      <div>
      <LinkedInIcon />
      <TwitterIcon />
      <InstagramIcon />
      <GitHubIcon />
      </div>

      <Askme />
      </div >
      <Link href='/'>
        <button className="back">Volver a Incio</button>
      </Link>
    </div>

  );
}

export default Contact;