import { Card, Button, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import react from "../img/react.png";
import certificado from "../img/certificado.png";
import "./info.css";
import Tecnologias from "./tecnologias";
import Portafolio from "./portafolio";
import QR from "../img/QR.png"
import certificado2 from "../img/certificado_2.jpeg"
import certificado3 from "../img/certificado_3.jpeg"
import certificado4 from "../img/certificado_4.jpeg"

function Datos() {
  const [key, setKey] = useState("home");

  return (
    <>
      <div className="container-fluid ">
        <Navbar bg="dark" data-bs-theme="dark" >
          <Container>
            <Navbar.Brand>
              <h1 className="logo">
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
                  <h6>(2023 a la fecha)</h6>
                </Card.Title>
                <ul className="datos">
                  <li>Nacionalidad: Chilena</li>
                  <li>Residencia: La Serena</li>
                  <li>Nacido el: 2002</li>
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
                  <li>Gmail: matias.torres1812@gmail.com</li>
                  <li>Telefono: 9 4415 7085</li>
                  <h6>QR de mi whatsapp personal:</h6>
                  <img src={QR} alt="" style={{ width: "6.5rem" }}/>
                </ul>
              </Card.Body>
              <Card.Footer className="icons">
                <Button
                  className="btn "
                  variant="outlinr-light"
                  href="www.linkedin.com/in/matias-torres-developer-freelance"
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
                <Button
                  className="btn "
                  variant="outlinr-light"
                  href=" https://w.app/HXsgyb"
                >
                  <i class="bi bi-whatsapp"></i>
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
              <Tab eventKey="tecnologiayhabilidades" title="Habilidades y tecgnologias">
                <Tecnologias />
              </Tab>
              <Tab eventKey="portafolio" title="Portafolio">
                <Portafolio />
              </Tab>
              <Tab className="img" eventKey="certificado" title="Certificado">
                <img className="m-1" style={{ width: "27rem", height: "20rem" }} src={certificado} width="900" height="640" />
                <img className="m-1" style={{ width: "27rem", height: "20rem" }} src={certificado2} width="900" height="640" />
                <img className="m-1" style={{ width: "27rem", height: "20rem" }} src={certificado3} width="900" height="640" />
                <img className="m-1" style={{ width: "27rem", height: "20rem" }} src={certificado4} width="900" height="640" />
              </Tab>
            </Tabs>

          </div>
        </div>
          <hr className="solid" />
            <footer className="footer" >
              <p>© 2023 Matias Torres. Todos los derechos reservados.</p>
            </footer>
      </div>
    </>
  );
}

export default Datos;
