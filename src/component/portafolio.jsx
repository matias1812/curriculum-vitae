import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./tecno.css"

function Portafolio(){
    return(
    <>
    <div>
        <h1>
            Bienvanido a mi Github
            <i className="bi bi-github img" ></i>
        </h1>
        <p>La cual esta conformada por proyectos personales uno correspondiente para la entidad del Sename, otro para una postulacion a la CORFO
            y por ultimo y no menos importante una de las pruebas de mi Bootcamp.
        </p>
        <Card style={{ width: "55rem" }} className="text-center git">
        <Card.Header><h1>Frontend Sename</h1></Card.Header>
        <Card.Body>
            <Card.Text>
                Este proyecto fue realizado para la entidad del Sename, el cual consistia en realizar un frontend para una pagina web con llogi, sing up, logout, validaciones, filtros por region, paguination y esaba conectada a una api creada por nosotros.
                la funcionalidad de esta paqguina es conectar los niños del Sename con el mundo laboral.
            </Card.Text>
        </Card.Body>
        <Card.Footer className="">
            <Button 
                variant="outline-dark"
                href="https://github.com/matias1812/frontend_sename">              
                <i className="bi bi-github" ></i>
            </Button>
        </Card.Footer>
        </Card>
        <Card style={{ width: "55rem" }} className="text-center git">
        <Card.Header><h1>Huella 0</h1></Card.Header>
        <Card.Body>
            <Card.Text>
                Este proyecto fue realizado para postular al apoyo de la CORFO, el cual consistia en realizar un frontend con chat bot que pueda ayudar a orientar al publico que le interese obtener un biodigestor la cual tambien bose coneccion a fire base y prximamente webpay todavia en proceso de elaboracion
            </Card.Text>
        </Card.Body>
        <Card.Footer className="">
            <Button 
                variant="outline-dark"
                href="https://github.com/matias1812/huella0">              
                <i className="bi bi-github" ></i>
            </Button>
        </Card.Footer>
        </Card>
        <Card style={{ width: "55rem" }} className="text-center git">
        <Card.Header><h1>Pueba.js</h1></Card.Header>
        <Card.Body>
            <Card.Text>
                Este proyecto fue realizado para una prueba tecnica en la que usabamos un endpoint para hacer una apicall y imprimir productos con un boton de like el cual se le podia poner like.
            </Card.Text>
        </Card.Body>
        <Card.Footer className="">
            <Button 
                variant="outline-dark"
                href="https://github.com/matias1812/prueba.js">              
                <i className="bi bi-github" ></i>
            </Button>
        </Card.Footer>
        </Card>
    </div>
    </>
    )
}
export default Portafolio;

