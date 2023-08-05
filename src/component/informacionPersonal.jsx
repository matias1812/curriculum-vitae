import { Card, Button, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import react from "../img/react.png";
import certificado from "../img/certificado.png";
import "./info.css";
import Tecnologias from "./tecnologias";

function Datos() {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="container-fluid ">
        <Navbar bg="dark" data-bs-theme="dark" >
          <Container>
            <Navbar.Brand>
              <h1 class="logo">
                <img src={react} alt="" width="50" height="50" className="react" />
                Matias Ignacio Torres Torres
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="https://www.linkedin.com/in/matias-torres-550a87284/">Matias Torres</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="row">
          <div className="column col-lg-4 col-md-12">
            <Card style={{ width: "25rem" }} className="info">
              <Card.Header>
                <h1>Información Personal</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h3>Frontend developer Independiente</h3>
                </Card.Title>
                <ul className="datos">
                  <li >RUT: 21.195.909-6</li>
                  <li>Nacionalidad: Chilena</li>
                  <li>Recidencia: La Serena</li>
                  <li>Nacido el: 18/12/2002</li>
                  <li>Estudio: Full Stack Javascript</li>
                  <li>Bootcamp de: Desafio Latam</li>
                </ul>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }} className="info">
              <Card.Header>
                <h1>Información de contacto</h1>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li>Telefono: 9 4415 7085</li>
                  <li>Gmail: matias.torres1812@gmail.com</li>
                </ul>
              </Card.Body>
              <Card.Footer className="icons">
                <Button
                  className="btn "
                  variant="outlinr-light"
                  href="https://github.com/matias1812"
                >
                  <i className="bi bi-github" ></i>
                </Button>
                <Button
                  className="btn "
                  variant="outlinr-light"
                  href="https://www.linkedin.com/in/matias-torres-550a87284/"
                >
                  <i className="bi bi-linkedin"></i>
                </Button>
              </Card.Footer>
            </Card>

          </div>
          <div className="precentacion col-lg-8 col-md-12">
            <Tabs
              id="controlled-tab-example"
              defaultActiveKey="tecnologiayhabilidades"
              onSelect={(k) => setKey(k)}
              className="mb-3"
              justify
              variant="tabs"
            >
              <Tab eventKey="tecnologiayhabilidades" title="Tecnologias y habilidades">
                <Tecnologias />
              </Tab>
              <Tab eventKey="portafolio" title="Portafolio"></Tab>
              <Tab eventKey="certificado" title="Certificado">
                <img src={certificado} width="900" height="640" />
              </Tab>
            </Tabs>

          </div>
        </div>
          <hr className="solid" />
            <footer className="footer" >
              <p>© 2021 Matias Torres. Todos los derechos reservados.</p>
            </footer>
      </div>
    </>
  );
}

export default Datos;