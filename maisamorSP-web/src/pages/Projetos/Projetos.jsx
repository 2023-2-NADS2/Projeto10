import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projetos.css';
import imagemAcoesPeriodicas from './acoes-periodicas.png';
import imagemAcoesEspeciais from './acoes-especiais.png';
import imagemAcoesEmergenciais from './acoes-emergenciais.png';

const ProjectItem = ({ title, text, image }) => (
    <Col md={4} className="mb-3">
        <Card style={{ width: '18rem', height: '35rem' }} className="card-item">
            <Card.Img variant="top" src={image} className="image-container" />
            <Card.Body>
                <Card.Title className="color-pink">{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

const Projetos = () => (
    <section className="our-projects mt-5" id="projetos" data-aos="zoom-in" data-aos-delay="100">
        <div className="blue-divider text-center">
            <h2>Nossos projetos</h2>
        </div>
        <Container>
            <Row className="justify-content-center m-5">
                <ProjectItem data-aos="zoom-in" data-aos-delay="300"
                    title="Ações periódicas"
                    text="Ocorrem todas as semanas (20h as 23h) às quintas em São Paulo e às sextas no ABC. Atendemos mais de 8 comunidades de ocupações e 7 pontos nas ruas de SP. São distribuídos lanches, sucos, kits de higiene, ração para pets, além de roupas, agasalhos, sapatos e cobertores."
                    image={imagemAcoesPeriodicas}
                />
                <ProjectItem data-aos="zoom-in" data-aos-delay="400"
                    title="Ações especiais"
                    text="Ocorrem aos fins de semana (8h às 17h). São eventos de grande porte, realizados em comunidades carentes atendendo cerca de 400 crianças. São oferecidas atividades de oficinas, brincadeiras educativas, alimentação. Um dia inteiro para que as crianças tenham a oportunidade de se divertir e poder brincar com segurança."
                    image={imagemAcoesEspeciais}
                />
                <ProjectItem data-aos="zoom-in" data-aos-delay="500"
                    title="Ações emergenciais"
                    text="São ações realizadas em datas esporádicas, podem ser entregas de cestas básicas, leites, fraldas, doação de sangue ou qualquer auxílio que possa atender a sociedade. São realizadas principalmente em locais com pessoas em situações vulneráveis."
                    image={imagemAcoesEmergenciais}
                />
            </Row>
            <div className="text-center mb-5" data-aos="zoom-in" data-aos-delay="100">
                <Link to="/contribua" className="btn btn-danger btn-lg pink-button">
                    Quero colaborar com os projetos!
                </Link>
            </div>
            <div className="text-center mb-5" data-aos="zoom-in" data-aos-delay="100">
                <Link to="/sonhos" className="btn btn-danger btn-lg pink-button">
                    Conhecer a iniciativa S.O.N.H.O.S
                </Link>
            </div>
        </Container>
    </section>
);

export default Projetos;
