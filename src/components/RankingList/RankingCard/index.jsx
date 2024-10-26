import React from "react";
import './styles.css'

export const RankingCard = ({img}) => {
  console.log('bilada');
  return ( 
    <div className="RankingCard">
      <img src={img} alt="" />
    </div>
   );
}