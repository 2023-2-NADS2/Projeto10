import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Contribua.css';
import Divider from '../../components/Divider/Divider'


const Contribua = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section id="contribua" data-aos="fade-down" data-aos-delay="400" data-aos-easing="ease-in-sine">
            <Container>
                <div className="text-center pt-5">
                    <h1 className="section-title">COLABORE</h1>
                </div>
                <p className="section-subtitle">Contribua, ajude-nos a espalhar <strong>mais amor por onde formos.</strong></p>

                <Divider />

                <h2 className="section-subtitle">DOAÇÕES POR TRANSFERÊNCIA, DEPÓSITO OU PIX</h2>
                <p>Você pode realizar a sua doação também através de PIX, transferência ou depósito bancário. Basta conferir as informações abaixo e enviar o comprovante para o nosso e-mail: <strong>maisamorsp.projeto@gmail.com</strong>.</p>
                <Row className="justify-content-around pt-4 pb-5">
                    <Col md={4} className="mb-4">
                        <Card className="cards-border">
                            <Card.Body>
                                <Card.Title className="color-pink">Dados do banco:</Card.Title>
                                <ul>
                                    <li><strong>Banco Inter:</strong> 077</li>
                                    <li><strong>Agência:</strong> 0001</li>
                                    <li><strong>Conta:</strong> 2941126-2</li>
                                    <li><strong>CNPJ:</strong> 26.242.127/0001-00</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="cards-border">
                            <Card.Body>
                                <Card.Title className="color-pink">Chave PIX:</Card.Title>
                                <p><strong>CNPJ:</strong> 26.242.127/0001-00</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="cards-border">
                            <Card.Body>
                                <Card.Title className="color-pink">Chave PIX:</Card.Title>
                                <p><strong>EMAIL:</strong> maisamorsp.projeto@gmail.com</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="cards-border">
                            <Card.Body>
                                <Card.Title className="color-pink">Chave PIX:</Card.Title>
                                <p><strong>TELEFONE:</strong> (11) 94746-4503</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Divider />

                <div className="volunteer-section pb-4" data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-sine">
                    <h2 className="section-subtitle">SEJA UM VOLUNTÁRIO</h2>
                    <p>Algumas das formas de colaborar para a ONG através do nosso programa de voluntariado:</p>
                    <ol>
                        <li>Participe das nossas ações</li>
                        <li>Doação de cestas básicas e itens de higiene</li>
                        <li>Contribua levando um pouco de amor para quem mais precisa</li>
                        <li>Postagens nas redes sociais</li>
                    </ol>
                </div>

                <Divider />

                <div className="partner-section pb-5" data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-sine">
                    <h2 className="section-subtitle">SEJA UMA EMPRESA PARCEIRA</h2>
                    <p>Sua empresa pode nos ajudar de diversas formas e estamos abertos a realizar parcerias. Caso tenham interesse entrem em contato através do e-mail: <strong>maisamorsp.projeto@gmail.com</strong>.</p>
                </div>
            </Container>
        </section>
    );
};

export default Contribua;
