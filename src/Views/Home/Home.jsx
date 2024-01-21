import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => 
{
    const navigate = useNavigate();  

    return (

    <Container fluid className="bg-dark text-white main-container p-5 " >
        <Row className="h-25">
            <Col>
                <h3 className="text-center">
                    Schooled || Logo de la cosa
                </h3>
            </Col>
        </Row>
        <Row className="h-50">
            <Col>
                <h3 className="text-center">
                    (Acá Podria ser foto del nyatito)
                </h3>
            </Col>
        </Row>
        <Container className="d-flex justify-content-around align-items-center flex-column h-25">
            <Button variant="primary" size="lg" className="w-50 mb-3"
            onClick={() => navigate("ingame")}>
                Comenzar
            </Button>
            <Button variant="primary" size="lg" className="w-50 mb-3" 
            onClick={() => navigate("instructions")}>
                Instrucciones
            </Button>
            <Button variant="primary" size="lg" className="w-50 mb-3"
            onClick={() => navigate("configurations")}>
                Configuraciones
            </Button>
        </Container>
    </Container>

    )
    

}

export default Home