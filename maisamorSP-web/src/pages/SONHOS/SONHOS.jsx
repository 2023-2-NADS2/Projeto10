import React, { useState, useEffect } from 'react';
import { fetchSonhos, deleteSonho } from './Services/sonhosService';
import './SONHOS.css';
import LoginModal from './Modals/Login/LoginModal';
import DesejoModal from './Modals/DesejoModal';
import DesejoCard from './Cards/DesejoCard';
import AdicionarSonhoModal from './Modals//AdicionarSonho/AdicionarSonhoModal';


const SONHOS = () => {

    const [items, setItems] = useState([]);
    const [modalInfo, setModalInfo] = useState(null);
    const [showHowItWorks, setShowHowItWorks] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showAdicionarModal, setShowAdicionarModal] = useState(false);
    const [desejoEditavel, setDesejoEditavel] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const getSonhos = async () => {
            try {
                const sonhosData = await fetchSonhos();
                setItems(sonhosData);
            } catch (error) {
                alert("Não foi possível carregar os sonhos.");
            }
        };

        getSonhos();
    }, []);

    const handleAdicionar = (novoDesejo) => {
        console.log('Adicionar desejo:', novoDesejo);
        setShowAdicionarModal(false);
    };

    const handleCloseAdicionarModal = () => {
        setShowAdicionarModal(false);
        setDesejoEditavel(null);
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };


    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLoginModal(false);
    };

    const handleEditarDesejo = (desejo) => {
        setModalInfo(null);
        setDesejoEditavel(desejo);
        setShowAdicionarModal(true);
    };

    const handleDeleteDesejo = async (desejo) => {
        try {
            console.log(`Deletando desejo: ${desejo.id}`);
            await deleteSonho(desejo.id);
            setItems(items => items.filter(item => item.id !== desejo.id));
            alert('Desejo deletado com sucesso!');
            closeModal();
        } catch (error) {
            alert('Erro ao deletar o desejo: ' + error.message);
            console.error('Erro ao deletar o desejo:', error);
        }
    };

    const showModal = (sonho) => {
        setModalInfo(sonho);
    };

    const closeModal = () => {
        setModalInfo(null);
    };

    const toggleHowItWorks = () => {
        setShowHowItWorks(!showHowItWorks);
    };

    const redirectToWhatsApp = (sonho) => {
        const message = `Olá, gostaria de ajudar a realizar o sonho de ${sonho.nomeCrianca}, que deseja ${sonho.desejo}.`;
        const whatsappUrl = `https://wa.me/5511947464503?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="sonhos-container" data-aos='zoom-in'>
            {showLoginModal && <LoginModal onClose={handleCloseLoginModal} onLoginSuccess={handleLoginSuccess} />}
            {!isLoggedIn ? (
                <button onClick={() => setShowLoginModal(true)} className="login-button">Login</button>
            ) : (
                <button onClick={handleLogout} className="logout-button">Logout</button>
            )}
            {
                isLoggedIn && (
                    <button onClick={() => setShowAdicionarModal(true)} className="adicionar-sonho-btn">
                        Adicionar Desejo
                    </button>
                )
            }
            <section className="sonhos-intro">
                <h1 className="sonhos-intro-title">Realize um S.O.N.H.O!</h1>
                <p className="sonhos-intro-description">
                    Nossa iniciativa especial: <strong>S</strong>urpresas <strong>O</strong>fertadas a <strong>N</strong>ovos Horizontes, <strong>O</strong>timismo e <strong>S</strong>orrisos permite que você ajude a realizar os sonhos das crianças
                    que precisam de um pouco mais de esperança.
                    Cada sonho aqui representado é uma janela para um futuro melhor. Descubra como você
                    pode participar e fazer a diferença na vida de uma criança:
                </p>
                {showHowItWorks && (
                    <div className="sonhos-how-it-works-modal">
                        <div className="sonhos-modal-content">
                            <button onClick={toggleHowItWorks} className="sonhos-modal-close">&times;</button>
                            <h2>Como Funciona?</h2>
                            <p>Para realizar um sonho, basta clicar em um dos sonhos listados abaixo. Você verá mais detalhes sobre o desejo da criança e poderá escolher ajudar diretamente. </p>
                            <p>Ao decidir realizar um sonho, você será direcionado ao nosso contato no WhatsApp, onde poderemos coordenar sua contribuição.</p>
                        </div>
                    </div>
                )}
                <button className="sonhos-intro-btn" onClick={toggleHowItWorks}>Como Funciona?</button>
            </section>
            <div className="sonhos-grid">
                {items.map((sonho) => (
                    <DesejoCard key={sonho.id} sonho={sonho} onCardClick={() => showModal(sonho)} />
                ))}
            </div>
            {showAdicionarModal && (
                <AdicionarSonhoModal
                    onSalvar={handleAdicionar}
                    onEditar={handleEditarDesejo}
                    setItems={setItems}
                    desejoEditavel={desejoEditavel}
                    onClose={handleCloseAdicionarModal}
                />
            )}
            {modalInfo && (
                <DesejoModal
                    desejo={modalInfo}
                    onClose={closeModal}
                    onWhatsAppClick={redirectToWhatsApp}
                    onEditarClick={handleEditarDesejo}
                    onDeleteClick={handleDeleteDesejo}
                    isLoggedIn={isLoggedIn}
                />
            )}
        </div>
    );
}

export default SONHOS;
