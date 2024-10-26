import React from "react";
import './styles.css'
import { RankingColumn } from "./RankingColumn";

export const RankingList = ({isOpen, setRankOpen, lists, setLists}) => {
  return ( 
  <div className={!isOpen ? 'RankingList' : 'RankingList open'} >
    <div className="header">
      <div className="title">
        <img src="/iCON.png" alt="" />
        <h2><span>L</span>ist of <span>s</span>pirit <span>a</span>shes</h2>
      </div>
      <button className="close-list" onClick={() => setRankOpen(false)}> <img src="/Close.png" alt="" /></button>
    </div>
    <div className="SpiritList">
      {lists.map((array, index) => (
        <RankingColumn 
          rank={array.title} 
          key={index}
          cards={array.cards}
        />
      ))}
    </div> 
  </div>
  );
}
