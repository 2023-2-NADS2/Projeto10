import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sobre.css';
import imagem1 from './imagem1.png';
import imagem2 from './imagem2.png';
import imagem3 from './imagem3.png';
import imagem4 from './imagem4.png';

const TimelineItem = ({ image, text }) => (
  <div className="timeline-item">
    <img src={image} alt="Imagem do evento" className="timeline-image" />
    <p className="timeline-text">{text}</p>
  </div>
);

const Sobre = () => {

  const timelineData = [
    { image: imagem1, text: 'Nasceu da reunião de amigos que já eram líderes em outras ONGs e que entenderam que poderiam melhorar os processos e estar mais próximos da missão que desejavam.' },
    { image: imagem2, text: 'A primeira ação piloto contou com o apoio de 18 pessoas que se comprometeram com o propósito de entregar amor, valores, educação e amizade. Além de enxergar o outro, resgatar vidas, esperanças e sonhos. Mudar o mundo de alguém.' },
    { image: imagem3, text: 'Com a missão de levar o aprendizado, afeto e recreação para as crianças e a amizade, igualdade e dignidade para os adultos. O projeto começa a crescer, a próxima ação já conta com a participação de 41 pessoas e com a divulgação e impacto passa a contar com uma média de 130 voluntários ainda em um cenário de pandemia.' },
    { image: imagem4, text: 'O projeto que atendia inicialmente 1 comunidade e 1 rota de rua, passou a atender 7 comunidades e 5 rotas de rua. Conseguimos expandir nossas ações também para Santo André, inspiramos o projeto em Manaus e impactamos em 2021 mais de 121 mil pessoas, atendemos aproximadamente 6100 crianças com nosso Dia de Mais Amor, produzindo cerca de 17 mil hambúrgueres, 127 mil lanches e 8.500 cestas básicas.' },
  ];

  return (
    <section id='sobre'>
      <Container className="my-5">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Sobre nós</h2>
        <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Conheça um pouquinho sobre a nossa história e como impactamos a sociedade:</h3>
        <Row className="justify-content-center">
          <Col md={8} data-aos="fade-up" data-aos-delay="100">
            {timelineData.map((data, index) => (
              <TimelineItem key={index} image={data.image} text={data.text} />
            ))}
          </Col>
        </Row>
        <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="50">
          <Link to="/contribua" className="custom-btn">
            Quero fazer parte dessa história!
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Sobre;
