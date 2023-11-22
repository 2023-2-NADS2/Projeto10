const DesejoModal = ({ desejo, onClose, onWhatsAppClick, onEditarClick, onDeleteClick, isLoggedIn }) => (
  <div className="sonhos-modal">
    <div className="sonhos-modal-content">
      <button onClick={onClose} className="sonhos-modal-close">&times;</button>
      <img src={desejo.urlImagem} alt={`Sonho de ${desejo.nomeCrianca}`} />
      <h2>{desejo.desejo}</h2>
      <p>Nome: {desejo.nomeCrianca}</p>
      <p>Idade: {desejo.idade}</p>
      <p>Região: {desejo.regiao}</p>
      <div className="sonhos-button-container">
        <button className="sonhos-realize-btn" onClick={() => onWhatsAppClick(desejo)}>
          Realizar Sonho
        </button>
        {isLoggedIn && (
          <>
            <button className="sonhos-editar-btn" onClick={() => onEditarClick(desejo)}>
              Editar
            </button>
            <button className="sonhos-delete-btn" onClick={() => onDeleteClick(desejo)}>
              Deletar
            </button>
          </>
        )}
      </div>
    </div>
  </div>
);

export default DesejoModal;
