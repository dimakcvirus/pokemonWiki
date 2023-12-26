const app = document.querySelector('.app');

const base = [
  { 
    namePok: 'Bulbasaur', 
    idPocemon: '#0001', 
    imgPocemon: '../img/Bulbasaur.png',
    type:{typeOne:'Grass',typetwo:'Poision'}
  },
  { 
    namePok: 'Ivysaur',
    idPocemon: '#0002',
    imgPocemon: '../img/Ivysaur.png',
    type:{typeOne:'Grass',typetwo:'Poision'}
  },
  { 
    namePok: 'Venusaur',
    idPocemon: '#0003',
    imgPocemon: '../img/Venusaur.png',
    type:{typeOne:'Grass',typetwo:'Poision'}
  },
  { 
    namePok: 'Charmander',
    idPocemon: '#0004',
    imgPocemon: '../img/Charmander.png',
    type:{typeOne:'Fire'}
  },
  { 
    namePok: 'Charmeleon',
    idPocemon: '#0005',
    imgPocemon: '../img/Charmeleon.png',
    type:{typeOne:'Fire'}
  },
  { 
    namePok: 'Charizard',
    idPocemon: '#0006',
    imgPocemon: '../img/Charizard.png',
    type:{typeOne:'Fire',typetwo:'Flying'}
  },
  { 
    namePok: 'Squirtle',
    idPocemon: '#0007',
    imgPocemon: '../img/Squirtle.png',
    type:{typeOne:'Wather'}
  },
  {
    namePok: 'Wartortle', idPocemon: '#0008',
    imgPocemon: '../img/Wartortle.png',
    type:{typeOne:'Wather'}
  },
  {
    namePok: 'Blastoise',
    idPocemon: '#0009',
    imgPocemon: '../img/Blastoise.png',
    type:{typeOne:'Wather'}
  },
  {
    namePok: 'Caterpie',
    idPocemon: '#0010',
    imgPocemon: '../img/Caterpie.png',
    type:{typeOne:'Bug'}
  },
  {
    namePok: 'Metapod',
    idPocemon: '#0011',
    imgPocemon: '../img/Metapod.png',
    type:{typeOne:'Bug'}
  },
  {
    namePok: 'Butterfree',
    idPocemon: '#0012',
    imgPocemon: '../img/Butterfree.png',
    type:{typeOne:'Bug',typeOne:'Flying'}
  },
];

function container() {
  const osnContaner = document.createElement('div');
  osnContaner.className = 'osnContaner';
  app.appendChild(osnContaner);

  const menu = document.createElement('div');
  menu.className = 'menu';
  osnContaner.appendChild(menu);

  const showAdwanced = document.createElement('p');
  showAdwanced.className = 'showAdwanced';
  showAdwanced.textContent = 'Show Advanced Search';
  menu.appendChild(showAdwanced);

  const groupCardPoc = document.createElement('div');
  groupCardPoc.className = 'groupCardPoc';
  osnContaner.appendChild(groupCardPoc)

  return groupCardPoc;
}

function mass() {
  for (let index = 0; index < base.length; index++) {
    const basePoc = base[index];
    
    pocemonShow(basePoc, osnContaner);
  }
}

const osnContaner = container();
mass();

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

  const namePok = document.createElement('h2');
  namePok.className = 'namePok';
  namePok.textContent = basePoc.namePok;
  cardPok.appendChild(namePok);

  const typePok = document.createElement('div');
  typePok.className = 'typePok';
  cardPok.appendChild(typePok);
   
  typeSearch(basePoc,typePok)

}

function typeSearch(basePoc,typePok){
 if(basePoc.type !== undefined){
  for( key in basePoc.type){
    const type = document.createElement('p');
    type.className = 'type'
    type.textContent = basePoc.type[key]
    typePok.appendChild(type)
  }
 }
}








