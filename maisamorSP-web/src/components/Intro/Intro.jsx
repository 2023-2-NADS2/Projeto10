import React from 'react';
import { Parallax } from 'react-parallax';
import './Intro.css';
import imagemFundo from './Intro.png'

const Intro = () => {
    // Detecta se é um dispositivo móvel
    const isMobile = window.innerWidth <= 480;

    // Conteúdo para ser renderizado
    const content = (
        <div className="parallax-content">
            <div className="intro-text">
                <h1>Projeto Mais Amor SP</h1>
                <p>"Que seja amor, por onde for"</p>
            </div>
        </div>
    );

    return (
        <div id='intro' style={{ backgroundImage: isMobile ? `url(${imagemFundo})` : 'none' }}>
            {isMobile ? content : (
                <Parallax bgImage={imagemFundo} strength={300}>
                    <div style={{ height: '100vh' }}>
                        {content}
                    </div>
                </Parallax>
            )}
        </div>
    );
};

export default Intro;
