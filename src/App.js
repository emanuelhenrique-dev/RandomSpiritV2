import './App.css';
import { useState } from 'react';

import { backmusic } from './assets/assets';
import { GeneratorMenu } from './components/GeneratorMenu';
import { RandomsSpirits } from './components/RandomsSpirits';
import { Smoke } from './components/Smoke';
import { loadLists } from './util/spiritList';

const data = loadLists();

export function App() {
  const [cards, setCards] = useState([]);
  const [CardsNumber, setCardsNumber] = useState(1);
  const [dlcActive, setDlcActive] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState(['A']);
  const [lists, setLists] = useState(data);

  //Gerar um spirit aleatório e filtrando
  const generatorSpirit = () => {
    //console.log(dlcActive);

    //console.log("Todas as listas carregadas:", lists);
    const filteredCards = lists.filter((card) =>
      selectedButtons.includes(card.title)
    );
    const cardsList = filteredCards.flatMap((lists) => lists.cards);

    //filtrar se tem dlc ou so dlc
    let filteredList = cardsList.filter((card) => card.Dlc == false);
    if (dlcActive == 1) {
      filteredList = cardsList;
    } else if (dlcActive == 2) {
      filteredList = cardsList.filter((card) => card.Dlc == true);
    }
    //console.log(filteredList);

    const randomIndex = Math.floor(Math.random() * filteredList.length);
    //console.log(filteredList[randomIndex]);

    console.log(filteredList);
    console.log(filteredList[randomIndex]);
    return filteredList[randomIndex];
  };

  return (
    <div className="App">
      <div className="logo">
        <h2>
          <span>E</span>lden rin<span>G</span>
        </h2>
        <h1>random spirit ash</h1>
      </div>

      <GeneratorMenu
        CardsNumber={CardsNumber}
        cards={cards}
        setCards={setCards}
        setSelectedButtons={setSelectedButtons}
        selectedButtons={selectedButtons}
        setDlcActive={setDlcActive}
        dlcActive={dlcActive}
        generatorSpirit={generatorSpirit}
      />
      <RandomsSpirits
        CardsNumber={CardsNumber}
        setCardsNumber={setCardsNumber}
        cards={cards}
        generatorSpirit={generatorSpirit}
      />
      <Smoke />

      <audio src={backmusic} autoPlay></audio>
    </div>
  );
}