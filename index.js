const app = document.querySelector('.app');

const base = [
  { 
    namePokemon: 'Bulbasaur', 
    idPocemon: '#0001', 
    imgPocemon: '../img/Bulbasaur.png',
    type:{typeOne: 'Grass',typetwo:'Poision'}
  },
  { 
    namePokemon: 'Ivysaur',
    idPocemon: '#0002',
    imgPocemon: '../img/Ivysaur.png',
    type:{typeOne: 'Grass',typetwo:'Poision'}
  },
  { 
    namePokemon: 'Venusaur',
    idPocemon: '#0003',
    imgPocemon: '../img/Venusaur.png',
    type:{typeOne: 'Grass',typetwo:'Poision'}
  },
  { 
    namePokemon: 'Charmander',
    idPocemon: '#0004',
    imgPocemon: '../img/Charmander.png',
    type:{typeOne: 'Fire'}
  },
  { 
    namePokemon: 'Charmeleon',
    idPocemon: '#0005',
    imgPocemon: '../img/Charmeleon.png',
    type:{typeOne: 'Fire'}
  },
  { 
    namePokemon: 'Charizard',
    idPocemon: '#0006',
    imgPocemon: '../img/Charizard.png',
    type:{typeOne: 'Fire',typetwo:'Flying'}
  },
  { 
    namePokemon: 'Squirtle',
    idPocemon: '#0007',
    imgPocemon: '../img/Squirtle.png',
    type:{typeOne: 'Wather'}
  },
  {
    namePokemon: 'Wartortle', idPocemon: '#0008',
    imgPocemon: '../img/Wartortle.png',
    type:{typeOne: 'Wather'}
  },
  {
    namePokemon: 'Blastoise',
    idPocemon: '#0009',
    imgPocemon: '../img/Blastoise.png',
    type:{typeOne: 'Wather'}
  },
  {
    namePokemon: 'Caterpie',
    idPocemon: '#0010',
    imgPocemon: '../img/Caterpie.png',
    type:{typeOne: 'Bug'}
  },
  {
    namePokemon: 'Metapod',
    idPocemon: '#0011',
    imgPocemon: '../img/Metapod.png',
    type:{typeOne: 'Bug'}
  },
  {
    namePokemon: 'Butterfree',
    idPocemon: '#0012',
    imgPocemon: '../img/Butterfree.png',
    type:{typeOne: 'Bug',typeOne:'Flying'}
  },
];

function Creatcontainer() {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'mainContainer';
  app.appendChild(mainContainer);

  const menu = document.createElement('div');
  menu.className = 'menu';
  mainContainer.appendChild(menu);

  const showAdwanced = document.createElement('p');
  showAdwanced.className = 'showAdwanced';
  showAdwanced.textContent = 'Show Advanced Search';
  menu.appendChild(showAdwanced);

  const groupCardPoc = document.createElement('div');
  groupCardPoc.className = 'groupCardPoc';
  mainContainer.appendChild(groupCardPoc);

  return groupCardPoc;
}

function outputArray() {
  for (let index = 0; index < base.length; index++) {
    const basePoc = base[index];
    
    pocemonShow(basePoc, mainContainer);
  }
}

const mainContainer = Creatcontainer();
outputArray();

function pocemonShow(basePoc, groupCardPoc) {

  const cardPok = document.createElement('div');
  cardPok.className = 'cardPok';
  groupCardPoc.appendChild(cardPok);

  const img = document.createElement('img');
  img.className = 'img';
  img.src = basePoc.imgPocemon;
  cardPok.appendChild(img);

  const textIdPoc = document.createElement('p');
  textIdPoc.className = 'textIdPoc';
  textIdPoc.textContent = basePoc.idPocemon;
  cardPok.appendChild(textIdPoc);

  const namePokemon = document.createElement('h2');
  namePokemon.className = 'namePokemon';
  namePokemon.textContent = basePoc.namePokemon;
  cardPok.appendChild(namePokemon);

  const typePok = document.createElement('div');
  typePok.className = 'typePok';
  cardPok.appendChild(typePok);
   
  renderCreatwsTypePocemon(basePoc,typePok);

}

function renderCreatwsTypePocemon(basePoc, typePok){
  //type:{typeOne:'Grass',typetwo:'Poision'}
 if(basePoc.type){
  for(key in basePoc.type){
    const type = document.createElement('p');
    type.className = basePoc.type[key].toLowerCase();
    type.textContent = basePoc.type[key];
    typePok.appendChild(type);
  }
 }
}








