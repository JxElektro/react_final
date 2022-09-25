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
    <>
      < div className='main' data-testid="containerContact"><h1>Contacto</h1>
        <div className="open">
          <a href="https://www.linkedin.com/in/jxelektro/" rel="noreferrer " target="_blank"><LinkedInIcon /></a>
          <a href="https://twitter.com/jxelektro" rel="noreferrer " target="_blank"><TwitterIcon /></a>
          <a href="https://www.instagram.com/saturnlaboratory/" rel="noreferrer " target="_blank"><InstagramIcon /></a>
          <a href="https://github.com/JxElektro" rel="noreferrer " target="_blank"><GitHubIcon /></a>
          <Askme />
          <div className='main'>
            <Link className="linkhome" href='/'>
              <button className="back">Volver a Incio</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;