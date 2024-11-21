import React from "react";
import './styles.css'

export const RankingCard = ({img, index, rankIndex, setActiveCard, setPreviewOpen, children}) => {
  return (
    <div className="slot-card"> 
      <div className="RankingCard" draggable
        onDragStart={() => setActiveCard({ rank: rankIndex, position: index })}  
        onDragEnd={() => {
          setActiveCard({ rank: null, position: null })
          setPreviewOpen("")
          console.log("onDragEnd")
        }}
      >
        <img src={img} alt="" draggable='false'/>
      </div>
      {children}
    </div>
   );
}