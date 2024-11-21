import React from 'react';
import './styles.css'


export const DropArea = ({activeCard, rankIndex, index, setPreviewOpen, side, onDrop}) => {

  const classe = activeCard.position!=null  ? `${side} DropArea show` : `${side} DropArea`;

  return ( 
  <div 
    className={classe}
    onDragEnter={() => {
      setPreviewOpen(`R${rankIndex} P${index}`)
    }}
    onDrop={() => {
      onDrop()
    }}
    onDragOver={(e) => {
      e.preventDefault()
    }}
  >
  </div> 
  );
}