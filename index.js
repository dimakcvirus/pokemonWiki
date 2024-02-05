const BASE_URL = 'https://pokeapi.co/api/v2/';
const LIMIT_POKEMNON = 12;

let app = document.getElementById("app");
let offsetPok = 0
const base = [];
let innerPokemonData = null;

const mainContainer = Creatcontainer();

async function getPokemons() {
  const response = await fetch(`${BASE_URL}pokemon/?limit=${LIMIT_POKEMNON}&offset=${offsetPok}`);
  const data =  await response.json(); // парсим промис
  const parametersPokemons = data.results; // задаю ссылку для мапа 
  // получаю все урлы и передаю в новую функцию

  await Promise.allSettled(parametersPokemons.map(async (parametrPokemon) => {
    const pokemonData = await getPokemon(parametrPokemon.url);
    base.push(pokemonData)
  }));

  base.sort((a, b) => {
    return a.id - b.id
  });

  outputArray(base); //отрисовка вызовется только тогда, когда выполнется allSettled
}

const getPokemon = async (pokemonUrl) => {
  const response = await fetch(pokemonUrl); // отправляю все урлы
  const pokemonData = await response.json(); // парсим урлы

  return pokemonData
}

// обработчик нажатий на ссылки
let linksHandler = (event) => {
  // получаем запрошенный url
  let url = new URL(event.currentTarget.href);

  // запускаем роутер, предавая ему path
  Router.dispatch(url.pathname);

  // запрещаем дальнейший переход по ссылке
  event.preventDefault();
};

function Creatcontainer() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "mainContainer";
  app.appendChild(mainContainer);

  const groupCardPoc = document.createElement("div");
  groupCardPoc.className = "groupCardPoc";
  mainContainer.appendChild(groupCardPoc);

  const buttonNewPok = document.createElement('button');
  buttonNewPok.className = 'buttonNewPok';
  buttonNewPok.innerHTML = 'Load more Pokemon'
  mainContainer.appendChild(buttonNewPok);

  buttonNewPok.addEventListener('click', () => {
    offsetPok += 12
    getAdditionalPokemons()
  });

  return groupCardPoc;
}

function outputArray(base) {
  for (let index = 0; index < base.length; index++) {
    const basePok = base[index];
    pokemonShow(basePok, mainContainer, basePok.id);
    blankDatabaseDataStub(basePok);
    getId(basePok.id);
    // console.log('basePok',basePok.id)
  }
}

const getId = (id) => {
  const pokemonId = id
  let stringPokemonId = pokemonId.toString()

  switch (stringPokemonId.length) {
    case 1:
      return `#000${pokemonId}`;
    case 2:
      return `#00${pokemonId}`;
    case 3:
      return `#0${pokemonId}`;
    case 4:
      return `#${pokemonId}`;
    default:
      return `#000${pokemonId}`;
  }
};

function pokemonShow(basePok, groupCardPoc, id) {
  blankDatabaseDataStub(basePok);
  const cardPok = document.createElement("div");
  cardPok.className = "cardPok";
  groupCardPoc.appendChild(cardPok);
  
  const pokeLink = document.createElement("a");
  pokeLink.href = `/pokemons/${basePok.id}`;
  pokeLink.style.textDecoration = "none";

  const img = document.createElement("img");
  img.className = "img";
  img.src = basePok.sprites.other['official-artwork'].front_default;

  const informElements = document.createElement("div");
  informElements.className = "informElements";
  const textIdPok = document.createElement("div");
  textIdPok.className = "textIdPok";
  textIdPok.textContent = getId(id);

  const namePokemon = document.createElement("h2");
  namePokemon.className = "namePokemon";
  namePokemon.textContent = basePok.name;

  const typePok = document.createElement("div");
  typePok.className = "typePok";
  renderCreatwsTypePokemon(basePok, typePok);

  pokeLink.append(img);
  informElements.append(textIdPok, namePokemon, typePok);
  cardPok.append(pokeLink, informElements);

  // вешаем на событие onclick обработчик
  pokeLink.onclick = linksHandler;
}

function renderCreatwsTypePokemon(basePok, typePok) {
  if (basePok.types) {
    const maxTypesToShow = 4;
    let typesShown = 0;

    for (let key in basePok.types) {
      if (typesShown >= maxTypesToShow) {
        break;
      }

      const type = document.createElement("span");
      type.classList.add(basePok.types[key].type.name.toLowerCase());
      type.classList.add("pokemonType");
      type.textContent = basePok.types[key].type.name;
      typePok.appendChild(type);

      typesShown++;
    }
  }
}

const ShowMainPage = () => {
  // console.log('ShowMainPage');
  const mainContainer = document.querySelector(".mainContainer");
  let innerPokemonContainer = document.getElementById("inner-pokemon-container");
  
  innerPokemonContainer.style.display = 'none';
  console.dir(innerPokemonContainer);
  
  // TODO: вернуть удаление после того как RenderPokemonPage будет готов
  // удаляем из ДОМ-дерева контент внутреннего покемона
  // innerPokemonContainer.remove();

  // очищаем innerPokemonData
  innerPokemonData = null;

  // возвращаем видимость скрытого блока
  mainContainer.style.display = "flex";
};

const RenderPokemonPage = async ({ id }) => {
  // console.log('RenderPokemonPage', id);

  // если хэша нет - добавляем его в историю
  if (!window.location.href.match("#")) {
    history.pushState({}, null, window.location.href + `#pokemonId=${id}`);
  } else {
    const pokemonId = GetPokemonIdFromUrl(window.location.href);
    history.pushState({}, null, window.location.href.replace(`=${pokemonId}`, `=${id}`));
  }

  let existingContainer = document.getElementById("inner-pokemon-container");

  if (existingContainer) {
    // показываем внутреннюю страницу
    existingContainer.style.display = 'flex';
    // очищаем innerPokemonData
    innerPokemonData = null;
  }

  innerPokemonData = base.length && base.find((item) => Number(item.id) === Number(id));

  if (!innerPokemonData) {
    // если в массиве base нет нужного покемона - получаем его
    innerPokemonData = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
  headersRenderNameID(innerPokemonData.name,innerPokemonData.id);
  rendersImagePokemon(innerPokemonData.sprites.other["official-artwork"].front_default);
  rendreHeightWidth(innerPokemonData.height,innerPokemonData.weight,innerPokemonData.abilities,innerPokemonData.id);
  addTupeRendering(innerPokemonData.types)
  RenderStats(innerPokemonData.stats)
  //evo(innerPokemonData.id)

    console.log('innerPokemonData', innerPokemonData);

  /*
    !!!!!!!!!!!!!!!!! место для генерации html который сейчас прописан руками в index.html
    все данные которые будут нужны для отрисовки хранятся в обьекте innerPokemonData
  */

  // находим "mainContainer" который мы генерируем в методе "Creatcontainer"
  const mainContainer = document.querySelector(".mainContainer");
  mainContainer.style.display = "none"; // скрываем его в DOM-дереве
};

function blankDatabaseDataStub(basePok) {
  if (basePok.imgPokemon === "") {
    basePok.imgPokemon = "./img/pika.jpg";
  }
  if (basePok.namePokemon === "") {
    basePok.namePokemon = "dimakc";
  }
  if (basePok.idPokemon === "") {
    basePok.idPokemon = "000001";
  }
}

// фукнция по получению новой пачки покемонов, отрисовываем их и добавляем в base
const getAdditionalPokemons = async () => {
  const newPokemons = [];
  const url = `${BASE_URL}pokemon/?limit=${LIMIT_POKEMNON}&offset=${offsetPok}`;
  const response = await fetch(url);
  const data =  await response.json(); // парсим промис

  await Promise.allSettled(data.results.map(async(parametrPokemon) => {
    const pokemonData = await getPokemon(parametrPokemon.url);
    newPokemons.push(pokemonData);
  }))

  newPokemons.sort((a, b) => {
    return a.id - b.id;
  });

  base.push(...newPokemons);
  outputArray(newPokemons);
}

if (window.location.href.match('#')) {
  const pokemonId = GetPokemonIdFromUrl(window.location.href);

  RenderPokemonPage({ id: pokemonId });
} else {
  getPokemons()
}

const RenderStats = (stats) => {
 
  const maxStat = 200; // максимальное значение статов 
  const fillColor = '#30a7d7'; // цвет на который меняем ли
  const pokemonStats = {} //обекты которые содержащие статы покемонов 

     stats.forEach((item) => {
     pokemonStats[item.stat.name] =  item.base_stat
   }) 

  const fillStatsItems = (statsArray, statType) => { 
    statsArray.forEach((item, index) => {
      if (index + 1 <= Math.floor((pokemonStats[statType] / maxStat) * statsArray.length)) {
        item.style.background = fillColor;
      } // не очень понятно что тут происходит  index + 1 
    })
  }


  Object.keys(pokemonStats).forEach(statName => {
    const element = document.getElementById(statName);
    const elementChildrens = [].map.call(element.children, el  => el  ).reverse();// не очень понятно как тут появляется масив

    fillStatsItems(elementChildrens, statName) // сюда передается якобы statsArray и statType!!
  })
}

//RenderStats()

 function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function headersRenderNameID (name, id) {
  
  const pokemonName = document.querySelector('.pokemonName');
  const pokemonID = document.querySelector('.pokemonId');
   

  let idPokemon =  getId(id);
  let names = ucFirst(name);

  pokemonName.innerHTML = names;
  pokemonID.innerHTML = idPokemon
}


function rendersImagePokemon (urlImg) {
 const img = document.querySelector('.imgPokemon');
 img.src = `${urlImg}`;
}

function setAbilites (searchElm, changeElm) { 
  const liElements = document.querySelectorAll('.abilites li');
  liElements.forEach((li, index) => {
   // Проверяем, содержит ли элемент текст "Height"
   if (li.textContent === searchElm) {
   // Если да, то выводим следующий элемент <li> (индекс + 1)
   const nextLiIndex = index + 1;
   liElements[nextLiIndex].innerHTML = changeElm
   }
  })
}

function rendreHeightWidth(height,weight,abilities,id) {  
    setAbilites( 'Height', height);
    setAbilites( 'Weight', weight);
    setAbilites('Abilites' ,abilities[0].ability.name)
    gettinCategory(id)
}

async function gettinCategory  (id) {
  let category = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  let json = await category.json();

  json.genera.forEach(index => {
    if(index.language.name === 'en'){
      const category = index.genus.split(' ', 2);
      setAbilites( 'Category', category[0].toLowerCase());
    }
  })
}

const addTupeRendering = (types) => {
  const weaknesses = document.querySelector('.weaknesses')
  weaknesses.innerHTML = ''
  
  types.forEach((item)=>{
    const type = document.createElement("span");
       type.classList.add(item.type.name);
       type.classList.add("pokemonType");
       type.textContent = item.type.name;
       weaknesses.appendChild(type);
  })
}

