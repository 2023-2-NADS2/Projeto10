import React, { useState, useEffect } from 'react';
import { createSonho, updateSonho } from '../../Services/sonhosService';
import './AdicionarSonhoModal.css';

const AdicionarSonhoModal = ({ desejoEditavel, onSalvar, onEditar, setItems, onClose }) => {
    const [novoDesejo, setNovoDesejo] = useState({
        nomeCrianca: '',
        desejo: '',
        idade: '',
        regiao: ''
    });

    const [imagem, setImagem] = useState(null);

    useEffect(() => {
        if (desejoEditavel) {
            setNovoDesejo(desejoEditavel);
        }
    }, [desejoEditavel]);


    const handleImageChange = (e) => {
        setImagem(e.target.files[0]);
    };

    const handleChange = (e) => {
        setNovoDesejo({ ...novoDesejo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nomeCrianca', novoDesejo.nomeCrianca);
        formData.append('desejo', novoDesejo.desejo);
        formData.append('idade', novoDesejo.idade);
        formData.append('regiao', novoDesejo.regiao);

        if (imagem) {
            formData.append('imagem', imagem);
        }

        try {
            if (desejoEditavel) {
                const updatedDesejo = await updateSonho(desejoEditavel.id, formData);
                onEditar(updatedDesejo);
                alert('Desejo atualizado com sucesso!');
            } else {
                const addedDesejo = await createSonho(formData);
                onSalvar(addedDesejo);
                alert('Desejo adicionado com sucesso!');
            }
        } catch (error) {
            alert('Ocorreu um erro: ' + error.message);
        } finally {
            onClose();
        }
    };

    return (
        <div className="adicionar-sonho-modal">
            <div className="adicionar-sonho-modal-content">
                <button onClick={onClose} className="adicionar-sonho-modal-close">&times;</button>
                <h2>{desejoEditavel ? 'Editar Desejo' : 'Adicionar Desejo'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nomeCrianca"
                        value={novoDesejo.nomeCrianca}
                        onChange={handleChange}
                        placeholder="Nome da Criança"
                        required
                    />
                    <input
                        type="text"
                        name="desejo"
                        value={novoDesejo.desejo}
                        onChange={handleChange}
                        placeholder="Desejo"
                        required
                    />
                    <input
                        type="number"
                        name="idade"
                        value={novoDesejo.idade}
                        onChange={handleChange}
                        placeholder="Idade"
                        min="1"
                        required
                    />
                    <input
                        type="text"
                        name="regiao"
                        value={novoDesejo.regiao}
                        onChange={handleChange}
                        placeholder="Região"
                        required
                    />
                    <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                    <button type="submit" className="adicionar-sonho-submit-btn">
                        {desejoEditavel ? 'Salvar Alterações' : 'Adicionar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdicionarSonhoModal;
