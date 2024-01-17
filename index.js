let app = document.getElementById("app");
const limitPokemnon = 12;
const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limitPokemnon}&offset=0`
const base = [];

const mainContainer = Creatcontainer();
async function getPokemons() {
    const response = await fetch(url)
    const data =  await response.json()// парсим промис
    const parametersPokemons = data.results // задаю ссылку для мапа 
    // получаю все урлы и передаю в новую функцию
      await Promise.allSettled( parametersPokemons.map(async(parametrPokemon) =>{
      await getPokemon(parametrPokemon.url)
     const pokemonGet = await getPokemon(parametrPokemon.url) 
     base.push(pokemonGet)
    }))
    base.sort((a, b)=>{
      return a.id - b.id
    })
    outputArray(base)//отрисовка вызовется только тогда, когда выполнется allSettled
    }

getPokemons()
async function getPokemon(PokemonUrl){
    const response = await fetch(PokemonUrl)// отправляю все урлы
     const poks = await response.json()// парсим урлы
     return poks
    //base.push(poks) // полученные данные отправляю в 
}



let innerPokemonData = null;

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

  return groupCardPoc;
}

function outputArray(base) {
  for (let index = 0; index < base.length; index++) {
    const basePok = base[index];
    pokemonShow(basePok, mainContainer);
    blankDatabaseDataStub(basePok);
    showId(basePok);
  }
}

const showId = (basePok) =>{
pok = basePok.id
pokToStr = pok.toString()

let count = 0 


for(i = 0; i <= pokToStr.length; i++){
  count =  i
}

if(count === 1) {
   return `#000${pok}`
  
}else if (count === 2){
   return `#00${pok}`

}else if (count === 3){
   return `#0${pok}`
  
}else if (count === 4){
  return `#${pok}`
}
}


function pokemonShow(basePok, groupCardPoc) {
  blankDatabaseDataStub(basePok);
  const cardPok = document.createElement("a");
  //cardPok.href = `/pokemons/${basePok.idPokemon.replace("#", "")}`;
  cardPok.style.textDecoration = "none";
  cardPok.style.color = "#000";
  cardPok.className = "cardPok";
  groupCardPoc.appendChild(cardPok);

  const img = document.createElement("img");
  img.className = "img";
  img.src = basePok.sprites.other['official-artwork'].front_default;
  cardPok.appendChild(img);

  const informElements = document.createElement("div");
  cardPok.appendChild(informElements);
  informElements.className = "informElements";
  const textIdPoc = document.createElement("div");
  textIdPoc.className = "textIdPoc";
  textIdPoc.textContent = showId(basePok);

  const namePokemon = document.createElement("h2");
  namePokemon.className = "namePokemon";
  namePokemon.textContent = basePok.name;

  const typePok = document.createElement("div");
  typePok.className = "typePok";
  informElements.append(textIdPoc, namePokemon, typePok);

  renderCreatwsTypePokemon(basePok, typePok);

  // вешаем на событие onclick обработчик
  cardPok.onclick = linksHandler;
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
  const mainContainer = document.querySelector(".mainContainer");
  let innerPokemonContainer = document.getElementById(
    "inner-pokemon-container"
  );
  // удаляем из ДОМ-дерева контент внутреннего покемона
  innerPokemonContainer.remove();
  // очищаем innerPokemonData
  innerPokemonData = null;

  // возвращаем видимость скрытого блока
  mainContainer.style.display = "block";
};

const RenderPokemonPage = async ({ id }) => {
  // console.log('RenderPokemonPage', id);

  // если хэша нет - добавляем его в историю
  if (!window.location.href.match("#")) {
    history.pushState({}, null, window.location.href + `#pokemonId=${id}`);
  }

  if (base.length) {
    innerPokemonData = base.find((item) => item.idPokemon === "#" + id);
  }

  let innerPokemonContainer = document.createElement("div");
  innerPokemonContainer.id = "inner-pokemon-container";

  const img = document.createElement("img");
  img.src = innerPokemonData.imgPokemon;

  const textIdPoc = document.createElement("p");
  textIdPoc.className = "textIdPoc";
  textIdPoc.textContent = innerPokemonData.idPokemon;

  const namePokemon = document.createElement("h2");
  namePokemon.className = "namePokemon";
  namePokemon.textContent = innerPokemonData.namePokemon;

  const typePok = document.createElement("div");
  typePok.className = "typePok";

  renderCreatwsTypePokemon(innerPokemonData, typePok);
  innerPokemonContainer.append(img, textIdPoc, namePokemon, typePok);

  let theFirstChild = app.firstElementChild;
  theFirstChild.style.display = "none";

  app.insertBefore(innerPokemonContainer, theFirstChild);
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

