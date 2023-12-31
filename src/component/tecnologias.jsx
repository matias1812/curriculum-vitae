import react from "../img/react.png"; 
import node from "../img/node.png";
import reactBoostrap from "../img/reactboostrap.jpg";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import sql from "../img/sql.png";
import postgres from "../img/postgres.png";
import vite from "../img/vite.svg";
import postman from "../img/postman.png";
import express from "../img/express.png";
import nodemon from "../img/nodemon.png";
import eslint from "../img/eslint.png";
import "./tecno.css"
function Tecnologias(){
    return(
    <>
      <h1>Habilidades:</h1>  
      <h5>Me considero una persona autosuficiente que investiga y busca una solucion, trabaja en equipo y le gusta aprender para nutrirse cada vez mas, asi poder ir evolucionando mediante incursiones, videos y capacitaciones los cuales constantemente estoy poniendo en practica. </h5>
          <h1>Manejo tecnologias como:</h1> 
          <h4>Frontend:</h4>
            <ul>
              <li>
                Node
                <img className="img" src={node} alt="" width="25" height="25"/>
              </li>
              <li>
                React 
                <img className="img" src={react} alt="react" width="25" height="25"/>
              </li>
              <li>
                React boostrap
                <img className="img" src={reactBoostrap} alt="reactBoostrap" width="25" height="25"/>
              </li>
              <li>
                Vite
                <img className="img" src={vite} alt="vite" width="25" height="25"/>
              </li>
              <li>
                Eslint
                <img className="img" src={eslint} alt="" width="25" height="25" />
              </li>
              </ul> 
              <h4>Backend:</h4>
              <ul>
              <li>
                Express
                <img className="img" src={express} alt="" width="70" height="35"/>
              </li>
              <li>
                Nodemon
                <img className="img" src={nodemon} alt="" width="25" height="25"/>
              </li>
              <li>
                Postgres
                <img className="img" src={postgres} alt="postgres" width="35" height="35"/>
              </li>
              <li>
                Postman
                <img className="img" src={postman} alt="" width="35" height="35"/>
              </li>
            </ul> 
            <h1>Manejo lenguajes como:</h1> 
            <ul>
              <li>
                Html
                <img className="img" src={html} alt="" width="30" height="30"/>
              </li>
              <li>
                Css
                <img className="img" src={css} alt="" width="35" height="35"/>
              </li>
              <li>
                JavaScript
                <img className="img" src={javascript} alt="" width="30" height="30"/>
              </li>
              <li>
                Sql
                <img className="img" src={sql} alt="" width="30" height="30"/>
              </li>
            </ul>
    </>
    )
}

export default Tecnologias;