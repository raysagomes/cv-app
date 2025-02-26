import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Home.css'
import { Button } from 'react-bootstrap';

function ContainerInicial() {
    return (
        <div>
            <Container className="ContainerInicial">
                <Row className="Container-Principal-row">
                    <Col md={6} className="Col-1">
                        <Row className="Container-Principal-row">
                            <h1 className="H1-Inicial">Seja bem-vindo ao nosso aplicativo de estoque</h1>
                        </Row>
                        <Row className="Container-Principal-row2">
                            <h1 className="H1-Inicial">Já tem uma conta?</h1>
                        </Row>
                        <Row className="botao">
                            <Button className="Btn-login" variant="none">Entrar</Button>
                        </Row>
                    </Col>

                    <Col md={6} className="Col-2 h-100">
                        <Row className="Container-Principal-row">
                            <h1 className="H1-Inicial-sign">Não tem ainda? Cadastre-se</h1>
                        </Row>
                        <Row className="botao2">
                            <Button className="Btn-signup" variant="none">Cadastre-se</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContainerInicial;
