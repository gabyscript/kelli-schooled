import { Container, Row, Col,Stack, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Instructions = () => {

    const navigate = useNavigate();

    return (

        <Container fluid 
        className="bg-dark text-white main-container p-5 
        d-flex flex-column justify-content-center align-items-center">
            <Container className="mb-5">
                <h3 className="text-center">
                    Instrucciones
                </h3>
            </Container>
            
            <Stack gap={5} className="px-5">
                <h5 className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas repellendus dolor quis perferendis non officia quidem. 
                    Cum odit corporis dignissimos?
                    
                </h5>
                <h5 className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas repellendus dolor quis perferendis non officia quidem. 
                    Cum odit corporis dignissimos?
                </h5>
                <h5 className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas repellendus dolor quis perferendis non officia quidem. 
                    Cum odit corporis dignissimos?
                </h5>
                <h5 className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas repellendus dolor quis perferendis non officia quidem. 
                    Cum odit corporis dignissimos?
                </h5>
            </Stack>
            <Container className="d-flex justify-content-center align-items-center">
                <Button variant="primary" size="lg" className="w-25 mb-3"
                onClick={() => navigate("/ingame")}>
                    Comenzar
                </Button>
            </Container>
        </Container>
    )


}

export default Instructions