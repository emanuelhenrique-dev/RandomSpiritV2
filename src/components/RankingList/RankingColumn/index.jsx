import React from "react";
import './styles.css'
import { RankingCard } from "../RankingCard";

export const RankingColumn = ({rank, cards}) => {

  return ( 
  <div className="RankingColumn">
    <div className={`rank ${rank}`}><h3>{rank}</h3></div>
    <div className="ranking-list">
      {cards.map((card, index) => (
        <RankingCard img={card.img} key={index}/>
      ))}
    </div>
  </div> 
  );
}
