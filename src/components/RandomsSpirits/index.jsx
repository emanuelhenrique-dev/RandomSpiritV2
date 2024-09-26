import './styles.css'
import { RandomCards } from '../RandomCards';
import { useState, useEffect } from 'react';

import { //Temporario pra teste  //
  BANISHED_KNIGHT_ENGVALL,
  ALBINAURIC_ASHES,
  MIMIC_TEAR_ASHES
} from '../../assets/assets.js';



export const RandomsSpirits = (props) => {

  const {setCardsNumber, CardsNumber, cards, generatorSpirit} = props;
  
// array de spirit padrao de entrada
  const [spirits, setSpirits] = useState(
    Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      name: 'Random',
      img: MIMIC_TEAR_ASHES,
      url: 'urls/random'
  }))
  );

  //Substitui os valores de spirit[] quando o cards mudar
  useEffect(() => {
    changeValues();
  }, [cards]); // 

  //atualizar valores do array de spirit dependendo do array cards[]
  const changeValues = () => {
    const newArray =spirits.map((item, index) => {
      return cards[index] || item; // Substitui se existir, senão mantém o original
    });
    setSpirits(newArray); 
    console.log('substitui')
  };

  //mudar especifico
  const refresh = (id) => {
    console.log("atualizado o card " + id)
    console.log(cards[id])
    const newSpirit = generatorSpirit();
    cards[id] = newSpirit;
    console.log(cards[id])
    changeValues();
  }


// mudar o numero de cards de 1 a 3
  const changeNumberCard = (i) => {
    setCardsNumber(prevNumber => Math.min(3, Math.max(1, prevNumber + i)));
    
  }

  return (
    <div className='RandomsSpirits'>
      <h3 className='title' >Spirit Ashes</h3>
      <div className="container-spirits">
      { spirits.slice(0, CardsNumber).map((card, index) => <RandomCards key={index} id = {index} name={card.name} img={card.img} url= {card.Link} click={() => changeNumberCard(-1)} refresh = {refresh} />)}
        <div className='button-container'>
          {CardsNumber < 3 &&  
          <button className= 'add-spirit' 
            onClick={() => changeNumberCard(1)}>
          </button>
          }
        </div>
      </div>
    </div>
  );
}

