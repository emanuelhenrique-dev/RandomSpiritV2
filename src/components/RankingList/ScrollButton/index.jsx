import './styles.css'
import { React, useState } from "react";

export const ScrollButton = ({ScrollTo, activeCard, scrollableSpiritList, isVisible}) => {



  // Função para scrollar a div
  const handleScroll = (direction) => {
    const interval = setInterval(() => {
      if (direction === 'up' && scrollableSpiritList.current.scrollTop > 0) {
        scrollableSpiritList.current.scrollBy(0, -10); // Rola para cima 10px
      } else if (direction === 'down' && 
                 scrollableSpiritList.current.scrollTop < 
                 scrollableSpiritList.current.scrollHeight - scrollableSpiritList.current.clientHeight) {
        scrollableSpiritList.current.scrollBy(0, 10); // Rola para baixo 10px
      }
    }, 30);

    // Atribui o intervalo à variável de referência para limpar mais tarde
    scrollableSpiritList.current.scrollInterval = interval;
  };

  // Função para parar o scroll
  const stopScroll = () => {
    if (scrollableSpiritList.current.scrollInterval) {
      clearInterval(scrollableSpiritList.current.scrollInterval);
      scrollableSpiritList.current.scrollInterval = null;
    }
  };

    if (!isVisible) {
      stopScroll();
      console.log(`sumiiiiiii`)
    }


  return ( 

  isVisible && 
  (
    <div 
      className={activeCard.position ? `${ScrollTo} ScrollButton show` : `${ScrollTo} ScrollButton` }
      onDragEnter={() => {
        handleScroll(ScrollTo)
      }}
      onDragLeave={stopScroll}
    >
    </div> 
  )

  );
}