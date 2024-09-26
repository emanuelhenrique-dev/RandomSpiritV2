import React from 'react';
import { useState } from 'react';

import { ButtonRank } from './buttonRank'

import './styles.css';



export const GeneratorMenu = (props) => {

  const {CardsNumber,
    cards,///apagar esse componente
          setCards,
          setSelectedButtons, 
          selectedButtons, 
          setDlcActive, 
          dlcActive, 
          generatorSpirit} = props;

//Seleciona se tem dlc ou somente dlc 
  const OnDlc = (n) => {
    switch (dlcActive) {
      case 0:
        console.log('case 0')
        if(n == 1) {
          setDlcActive(1)
        } else if (n == 2) {
          setDlcActive(2)
        }
        break;
      case 1:
        console.log('case 1')
        if(n == 1) {
          setDlcActive(0)
          console.log('setDlcActive(0)')
        } else if (n == 2) {
          setDlcActive(2)
          console.log('setDlcActive(2)')
        }
        break;
      case 2:
        console.log('case 2')
        if(n == 1) {
          setDlcActive(0)
        } else if (n == 2) {
          setDlcActive(1)
          console.log('bilada')
        }
        break;
      default:
        console.log(`wrong input`);
    }
  }
    

  // funcao pra seleciona os ranks
  const handleButtonClick = (button) => {
    setSelectedButtons((prev) => {
      if (prev.includes(button)) {
        // Se o botão já estiver selecionado, removê-lo
        return prev.filter((b) => b !== button);
      } else {
        // Se o botão não estiver selecionado, adicioná-lo  
        return [...prev, button];
      }
    }) 

  }

  const GeneratorButton = () => {
    setCards([]);
    for (let i = 0; i < CardsNumber; i++) {
      const novoItem = generatorSpirit();
      setCards(prev => [...prev, novoItem]);
    } 
  }



  return (
    <div className='GeneratorMenu'>
      <h2>choose the ranks of the spirits</h2>
      <div className="options">
        {['S', 'A', 'B', 'C', 'D'].map((rank) => (
          <ButtonRank key = {rank} click={() => handleButtonClick(rank)} rank = {rank} selectedButtons={selectedButtons}/>
        ))}
      </div>  
      <div className="container-dlc">
        <div className="onDlc">
          <div className= {(dlcActive==2) ? 'only active' : 'only'} onClick={() => OnDlc(2)}>only</div>
          <div className= {(dlcActive>0) ? 'dlc active' : 'dlc'} onClick={() => OnDlc(1)}>DLC</div>  
        </div>
      </div>
      <button className='submit-generator' onClick={GeneratorButton}>generate spirits</button>
    </div>
  );
}


