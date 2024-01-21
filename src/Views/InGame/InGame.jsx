import { Container, Row, Col, Button } from "react-bootstrap"
import { useState, useEffect } from "react"



const InGame = () => {

    const [questionsData, setQuestionsData] = useState();
    const [timer, setTimer] = useState(3)
    let [grade, setGrade] = useState(0)
    let [currentQuestion, setCurrentQuestion] = useState();

    let [showAnswer, setShowAnswer] = useState(false);

    function getRandomQuestions(questionArray) {
        let filteredArray = questionArray.filter((x) => x.grade === 0);
        return filteredArray[0]
    }

    const getNextQuestion = () => {

        setShowAnswer(false);

        ///Poner lógica para subir de grade/nivel
        setTimer(3);

        /// Poner limitante para que llegue a un grade maximo (curso maximo)
        setGrade(++grade)

        const newQuestion = questionsData.filter((q) => q.grade === grade);

        setCurrentQuestion(newQuestion[0])

    }

    const revealAnswer = () => {

        setShowAnswer(true)
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('./questions.json');
                const data = await response.json();
                const filteredData = data.filter((x) => x.grade === grade)

                let singleQuestion = filteredData[0];
                
                setCurrentQuestion(singleQuestion)
                setQuestionsData(data)
            } catch (error) {
                console.error("Error al momento de cargar los datos", error)
            }
        };

        fetchQuestions();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(interval);
                    return 0
                }
                return prevTimer -1
            })
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [timer])

    useEffect(() => {
        
    }, [grade])

    return (
        <Container fluid className="bg-dark text-white main-container p-5">
            <Row className="mb-5 py-5">
                <Col className="">                
                    <h5 className="text-center">
                        {currentQuestion?.subject}
                    </h5>
                </Col>
                <Col>                
                    <h5 className="text-center">
                        TITULO / LOGO DEL EVENTO
                    </h5>
                </Col>
                <Col>                
                    <h5 className="text-center">
                        Nivel {grade} // Curso
                    </h5>
                </Col>
            </Row>
            <Row className="h-25">
                <Col xl={12} lg={12}>
                    <h5 className="text-center">
                        {currentQuestion?.question}
                    </h5>
                </Col >
                {showAnswer == true && (
                <Col xl={12} lg={12} className="text-center mt-3">                        
                    <h5>
                        {currentQuestion.correctAnswer}
                    </h5>
                </Col>
            )}
            </Row>
            
            <Row>
                <Col>
                    <h4 className="text-center"> 
                        {timer}
                    </h4>
                </Col>
            </Row>
            
            {timer === 0 && !showAnswer && (
                <Row>
                    <Col className="text-center mt-3">                        
                        <Button variant="primary" onClick={() => revealAnswer()}>
                            Mostrar respuesta
                        </Button>
                    </Col>
                </Row>
            )}
            {timer === 0 && showAnswer && (
                <Row>
                    <Col className="text-center mt-3">                        
                        <Button variant="primary" onClick={() => getNextQuestion()}>
                            Siguiente pregunta
                        </Button>
                    </Col>
                </Row>
            )}
        </Container>        
    )
}

export default InGame