import React from "./Contact";
import ActionAreaCard from "../Componentes/Cards";
import './style.css'
import { Link } from "wouter";



function All(props) {
  //Pequeña funcion para calcular la cantidad de meses
  const begin = new Date('Jul 11 2022');
  const today = new Date();
  const monthBegin = begin.getMonth();
  const day = today.getMonth();
  const total = (day - monthBegin);


  return (
    < div >
      <div className='main'>
        <h1>Desarrollador Jr.</h1>
        <h3 className="conoce"> HTML5 | CSS | JavaScript | React</h3>
        <h4>¡Hola! Soy Jhen Nuñez <br/> Desarrollador con {total} meses de experiencia con espectativas de convertirme en "FullStack".<br/>Aficionado de el Diseño 3D y me gustaria trabajar proyectos que utilicen Realidad Aumentada.</h4>
        <div className="card_container">
        <Link href="/html"><a href="/html"><ActionAreaCard name="Web" parra="Diseño y maquetado Web"  url="https://images2.imgbox.com/75/51/xXa2ZISw_o.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></a></Link>
        <Link href="/Alfa"><a href="/Alfa"><ActionAreaCard name="Animacion" parra="Diseño 3D y Animacion" url="https://images2.imgbox.com/42/e6/o9ejCvu5_o.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></a></Link>
        <Link href="/js"><a href="/js"><ActionAreaCard name="Programacion" parra="Desarrollo, Consumo de APIs" url="https://images2.imgbox.com/c9/91/tQtqq9Hb_o.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></a></Link>
        </div>
      </div>

      


    </div>
  );
}

export default All;