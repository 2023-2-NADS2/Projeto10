import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contato.css';

const Contato = () => (
    <section id="contato" data-aos="fade-in" data-aos-delay="200">
        <Container>
            <div className="text-center">
                <h2 className="section-title">Contato</h2>
            </div>
            <Row className="justify-content-center text-center">
                <Col md={4} data-aos="fade-in" data-aos-delay="300">
                    <a href="https://www.instagram.com/projetomaisamorsp/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                        <p>Nosso Instagram</p>
                    </a>
                </Col>
                <Col md={4} data-aos="fade-in" data-aos-delay="400">
                    <a href="https://www.linkedin.com/company/projeto-mais-amor-s-p/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                        <p>Nosso Linkedin</p>
                    </a>
                </Col>
                <Col md={4} data-aos="fade-in" data-aos-delay="500">
                    <a href="https://wa.me/5511947464503" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} />
                        <p>(11) 9 4746-4503</p>
                    </a>
                </Col>
                <Col md={4} data-aos="fade-in" data-aos-delay="600">
                    <a href="mailto:maisamorsp.projeto@gmail.com">
                        <FaEnvelope size={30} />
                        <p>Nosso email para contato</p>
                    </a>
                </Col>
            </Row>
            <Row className="justify-content-center text-center" data-aos="fade-in" data-aos-delay="700">
                <Col>
                    <h3 className="section-subtitle">Esses são os principais canais para entrar em contato conosco. Estamos sempre prontos para ouvir e ajudar!</h3>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contato;
