let app = document.getElementById("app");

const base = [
  {
    namePokemon: "Bulbasaur",
    idPokemon: "#0001",
    imgPokemon: "./img/Bulbasaur.png",
    type: { typeOne: "Grass", typetwo: "Poison" },
  },
  {
    namePokemon: "Ivysaur",
    idPokemon: "#0002",
    imgPokemon: "./img/Ivysaur.png",
    type: { typeOne: "Grass", typetwo: "Poison" },
  },
  {
    namePokemon: "Venusaur",
    idPokemon: "#0003",
    imgPokemon: "./img/Venusaur.png",
    type: { typeOne: "Grass", typetwo: "Poison" },
  },
  {
    namePokemon: "Charmander",
    idPokemon: "#0004",
    imgPokemon: "./img/Charmander.png",
    type: { typeOne: "Fire" },
  },
  {
    namePokemon: "Charmeleon",
    idPokemon: "#0005",
    imgPokemon: "./img/Charmeleon.png",
    type: { typeOne: "Fire" },
  },
  {
    namePokemon: "Charizard",
    idPokemon: "#0006",
    imgPokemon: "./img/Charizard.png",
    type: { typeOne: "Fire", typetwo: "Flying" },
  },
  {
    namePokemon: "Squirtle",
    idPokemon: "#0007",
    imgPokemon: "./img/Squirtle.png",
    type: { typeOne: "Water" },
  },
  {
    namePokemon: "Wartortle",
    idPokemon: "#0008",
    imgPokemon: "./img/Wartortle.png",
    type: { typeOne: "Water" },
  },
  {
    namePokemon: "Blastoise",
    idPokemon: "#0009",
    imgPokemon: "./img/Blastoise.png",
    type: { typeOne: "Water" },
  },
  {
    namePokemon: "Caterpie",
    idPokemon: "#0010",
    imgPokemon: "./img/Caterpie.png",
    type: { typeOne: "Bug" },
  },
  {
    namePokemon: "Metapod",
    idPokemon: "#0011",
    imgPokemon: "./img/Metapod.png",
    type: { typeOne: "Bug" },
  },
  {
    namePokemon: "Butterfree",
    idPokemon: "#0012",
    imgPokemon: "./img/Butterfree.png",
    type: { typeOne: "Bug", tupeTwo: "Flying" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Flying" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Rock" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: {
      typeOne: "Bug",
      typetwo: "Dark",
      typetwo3: "Dragon",
      typetwo4: "Electric",
      typetwo5: "Fairy",
      typetwo6: "Fighting",
      typetwo7: "Fire",
      typetwo8: "Flying",
      typetwo9: "Ghost",
      typetwo10: "Grass",
      typetwo11: "Ground",
      typetwo12: "Ice",
      typetwo13: "Normal",
      typetwo14: "Poison",
      typetwo15: "Psychic",
      typetwo16: "Rock",
      typetwo17: "Steel",
      typetwo18: "Water",
    },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Rock" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Rock" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Rock" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Rock" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: { typeOne: "Bug", typetwo: "Rock" },
  },
];

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

  // const menu = document.createElement("div");
  // menu.className = "menu";
  // mainContainer.appendChild(menu);

  // const showAdwanced = document.createElement("p");
  // showAdwanced.className = "showAdwanced";
  // showAdwanced.textContent = "Show Advanced Search";
  // menu.appendChild(showAdwanced);

  const groupCardPoc = document.createElement("div");
  groupCardPoc.className = "groupCardPoc";
  mainContainer.appendChild(groupCardPoc);

  return groupCardPoc;
}

function outputArray() {
  for (let index = 0; index < base.length; index++) {
    const basePok = base[index];

    pokemonShow(basePok, mainContainer);
    blankDatabaseDataStub(basePok);
  }
}
const mainContainer = Creatcontainer();
outputArray();

function pokemonShow(basePok, groupCardPoc) {
  blankDatabaseDataStub(basePok);
  const cardPok = document.createElement("a");
  cardPok.href = `/pokemons/${basePok.idPokemon.replace("#", "")}`;
  cardPok.style.textDecoration = "none";
  cardPok.style.color = "#000";
  cardPok.className = "cardPok";
  groupCardPoc.appendChild(cardPok);

  const img = document.createElement("img");
  img.className = "img";
  img.src = basePok.imgPokemon;
  cardPok.appendChild(img);

  const informElements = document.createElement("div");
  cardPok.appendChild(informElements);
  informElements.className = "informElements";
  const textIdPoc = document.createElement("p");
  textIdPoc.className = "textIdPoc";
  textIdPoc.textContent = basePok.idPokemon;

  const namePokemon = document.createElement("h2");
  namePokemon.className = "namePokemon";
  namePokemon.textContent = basePok.namePokemon;

  const typePok = document.createElement("div");
  typePok.className = "typePok";
  informElements.append(textIdPoc, namePokemon, typePok);

  renderCreatwsTypePokemon(basePok, typePok);

  // вешаем на событие onclick обработчик
  cardPok.onclick = linksHandler;
}

function renderCreatwsTypePokemon(basePok, typePok) {
  if (basePok.type) {
    const maxTypesToShow = 4;
    let typesShown = 0;
    for (let key in basePok.type) {
      if (typesShown >= maxTypesToShow) {
        break;
      }

      const type = document.createElement("span");
      type.classList.add(basePok.type[key].toLowerCase());
      type.classList.add("pokemonType");
      type.textContent = basePok.type[key];
      typePok.appendChild(type);

      typesShown++;
    }
  }
}

const ShowMainPage = () => {
  // console.log('ShowMainPage');

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
