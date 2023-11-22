import React from "react";
import '../SONHOS.css';

const DesejoCard = ({ sonho, onCardClick }) => (
    <div className="sonhos-card" onClick={() => onCardClick(sonho)}>
      <img src={sonho.urlImagem} alt={`Sonho de ${sonho.nomeCrianca}`} className="sonhos-card-thumbnail" />
      <h3 className="sonhos-card-title">{sonho.desejo}</h3>
      <p className="sonhos-card-text">Um sonho de {sonho.nomeCrianca}, {sonho.idade} anos</p>
    </div>
  );
  
  export default DesejoCard;