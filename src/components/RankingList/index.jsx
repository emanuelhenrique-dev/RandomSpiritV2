import {React, useState, useRef} from "react";
import './styles.css'
import { RankingColumn } from "./RankingColumn";
import { ScrollButton } from "./ScrollButton";

export const RankingList = ({isOpen, setRankOpen, lists, setLists}) => {

  const [activeCard, setActiveCard] = useState({ rank: null, position: null });
  const [previewOpen, setPreviewOpen] = useState('');

  //estados para a rolagem e os botoes de rolagem da spiritlist
  const scrollableSpiritList = useRef(null);
  // Estado para controlar a visibilidade dos botões
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(true);
  const [isScrollDownVisible, setIsScrollDownVisible] = useState(true);

      // Função para verificar os limites de rolagem e esconder os botões
      const handleScroll = () => {
        const scrollTop = scrollableSpiritList.current.scrollTop;
        const scrollHeight = scrollableSpiritList.current.scrollHeight;
        const clientHeight = scrollableSpiritList.current.clientHeight;
    
        // Verifica se atingiu o topo ou o fundo e atualiza a visibilidade dos botões
        setIsScrollUpVisible(scrollTop > 0); // Se não estiver no topo, o botão de cima é visível
        setIsScrollDownVisible(scrollTop < scrollHeight - clientHeight); // Se não estiver no final, o botão de baixo é visível
      };



  //funcao para mover o item de posicao
  const onDrop = (rankIndexDestination, positionDestination) => {
    console.log(`O card do rank ${activeCard.rank} posicao ${activeCard.position }vai se colocado no rank ${rankIndexDestination} na posição ${positionDestination}`);

    //verifica se nao tem card sendo puxado ou se esta movendo no lado do mesmo
    if(activeCard.position == null || activeCard.position === undefined || 
      activeCard.rank == rankIndexDestination && (activeCard.position === positionDestination || activeCard.position === positionDestination - 1)) return;


      const updatedList = lists.map(list => ({
        ...list,
      cards: [...list.cards] // Cria uma nova cópia dos cards
      }));

    //remover item da origem, item puxado
    const itemMoved = updatedList[activeCard.rank].cards.splice(activeCard.position, 1)[0];

    //adicionando o item no destino
    updatedList[rankIndexDestination].cards.splice(positionDestination, 0, itemMoved);

    setActiveCard({ rank: null, position: null})
    setLists(updatedList)
    setPreviewOpen("")
    console.log('trocou posicao')
  }


  return ( 
  <div className={!isOpen ? 'RankingList' : 'RankingList open'} >
    <div className="header">
      <div className="title">
        <img src="/iCON.png" alt="" />
        <h2><span>L</span>ist of <span>s</span>pirit <span>a</span>shes</h2>
      </div>
      <button className="close-list" onClick={() => setRankOpen(false)}> <img src="/Close.png" alt="" /></button>
    </div>
    <div className="SpiritList" ref={scrollableSpiritList} onScroll={handleScroll} onLoad={handleScroll}>
      {lists.map((array, index) => (
        <RankingColumn 
          rank={array.title} 
          key={index}
          rankIndex={index} 
          cards={array.cards}
          setActiveCard={setActiveCard}
          previewOpen={previewOpen}
          setPreviewOpen={setPreviewOpen}
          activeCard = {activeCard}
          lists = {lists}
          onDrop={onDrop} // funcao para mover o item de posicao	
        />
      ))}
    </div> 

    <ScrollButton ScrollTo={'up'} activeCard={activeCard} scrollableSpiritList={scrollableSpiritList} isVisible={isScrollUpVisible}/>
    <ScrollButton ScrollTo={'down'} activeCard={activeCard} scrollableSpiritList={scrollableSpiritList} isVisible={isScrollDownVisible}/>
  </div>
  );


}
