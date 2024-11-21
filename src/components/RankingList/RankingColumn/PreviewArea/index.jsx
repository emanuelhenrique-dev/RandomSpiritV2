import {React, useState, useRef, useEffect }from 'react';
import { DropArea } from '../DropArea';
import './styles.css'


export const PreviewArea = ({rankIndex, index, activeCard, img, previewOpen, children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const previewRef = useRef([]);
  const previousPreviewOpen = useRef(previewOpen);
  const classe= `R${rankIndex} P${index}`;


   // abrir as previews
   useEffect(() => {
    // Se o valor de previewOpen for diferente do anterior
    if (previousPreviewOpen.current !== previewOpen) {
      if (previewOpen === classe && !isOpen) {
        if(!(activeCard.rank === rankIndex && (activeCard.position === index || activeCard.position === index-1))){
          setIsOpen(true); // Só abre se não estiver aberto 
        }  
      } else if (previewOpen !== classe && isOpen) {
        setIsOpen(false); // Só fecha se estiver aberto
      }
      previousPreviewOpen.current = previewOpen;
    }
  }, [previewOpen, classe, isOpen]); // O useEffect será executado sempre // Depende de dropOpen, classe e isOpen mudar


    // Função para atribuir a referência usando a classe (sem id ou index)
    const setRef = (el) => {
      if (el) {
        previewRef.current[classe] = el; // Usa 'classe' como chave para a ref
      }
    }


  return ( 
    <div className={isOpen ? `${classe} PreviewArea open` : `${classe} PreviewArea`} ref={setRef}>
      {isOpen && img?.[activeCard?.rank]?.cards?.[activeCard?.position]?.img && (
        <img src={img[activeCard.rank].cards[activeCard.position].img} alt="" />
      )}
      {children}
    </div>
  );
}