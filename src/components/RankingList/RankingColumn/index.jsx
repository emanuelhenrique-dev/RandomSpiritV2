import React from "react";
import './styles.css'
import { RankingCard } from "../RankingCard";
import { DropArea } from "./DropArea";
import { PreviewArea } from "./PreviewArea";

export const RankingColumn = ({
  rank,
  rankIndex, 
  cards, 
  previewOpen,
  setPreviewOpen, 
  activeCard,
  setActiveCard,
  lists,
  onDrop
  }) => {

  return ( 
  <div className="RankingColumn">
    <div className={`rank ${rank}`}><h3>{rank}</h3></div>
    <div className="ranking-list">
          <PreviewArea
            rankIndex={rankIndex}
            index={0}
            activeCard={activeCard}
            img={lists}
            previewOpen={previewOpen}
            
          >
            <DropArea activeCard={activeCard} rankIndex={rankIndex} index={0} setPreviewOpen={setPreviewOpen} side={'prev'} 
            onDrop={() => onDrop(rankIndex, 0)}/> 
          </PreviewArea>
      {cards.map((card, index) => (
        <React.Fragment key={index} >
          <RankingCard 
            img={card.img} 
            rankIndex={rankIndex} 
            index={index}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            setPreviewOpen={setPreviewOpen}
          >
            <DropArea activeCard={activeCard} rankIndex={rankIndex} index={index} setPreviewOpen={setPreviewOpen} side={'left'} 
            onDrop={() => onDrop(rankIndex, index)}/> 
            <DropArea activeCard={activeCard} rankIndex={rankIndex} index={index + 1} setPreviewOpen={setPreviewOpen} side={'right'} onDrop={() => onDrop(rankIndex, index+1)}/>
          </RankingCard>  
          <PreviewArea
            rankIndex={rankIndex} 
            index={index + 1}
            activeCard={activeCard}
            img={lists}
            previewOpen={previewOpen}
          >
            <DropArea activeCard={activeCard} rankIndex={rankIndex} index={index+1} setPreviewOpen={setPreviewOpen} side={'prev'} 
            onDrop={() => onDrop(rankIndex, index+1)}/> 
          </PreviewArea>
        </React.Fragment>
      ))}
      <DropArea activeCard={activeCard} rankIndex={rankIndex} index={cards.length} setPreviewOpen={setPreviewOpen} side={'last'} 
      onDrop={() => onDrop(rankIndex, cards.length)}/>
    </div>
  </div> 
  );
}
