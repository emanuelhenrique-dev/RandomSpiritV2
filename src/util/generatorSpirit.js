//Gerar um spirit aleatório e filtrando
const generatorSpirit = (dlcActive) => {
  console.log('gerou');

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
  console.log(filteredList);

  const randomIndex = Math.floor(Math.random() * filteredList.length);
  console.log(filteredList[randomIndex]);

  return filteredList[randomIndex];
};
