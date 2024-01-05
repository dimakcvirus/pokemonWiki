const app = document.querySelector(".app");

const base = [
  {
    namePokemon: "Bulbasaur",
    idPokemon: "#0001",
    imgPokemon: "./img/Bulbasaur.png",
    type: { typeOne: "Grass", typeTwo: "Poision" },
  },
  {
    namePokemon: "Ivysaur",
    idPokemon: "#0002",
    imgPokemon: "./img/Ivysaur.png",
    type: { typeOne: "Grass", typeTwo: "Poision" },
  },
  {
    namePokemon: "Venusaur",
    idPokemon: "#0003",
    imgPokemon: "./img/Venusaur.png",
    type: { typeOne: "Grass", typeTwo: "Poision" },
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
    type: { typeOne: "Fire", typeTwo: "Flying" },
  },
  {
    namePokemon: "Squirtle",
    idPokemon: "#0007",
    imgPokemon: "./img/Squirtle.png",
    type: { typeOne: "Wather" },
  },
  {
    namePokemon: "Wartortle",
    idPokemon: "#0008",
    imgPokemon: "./img/Wartortle.png",
    type: { typeOne: "Wather" },
  },
  {
    namePokemon: "Blastoise",
    idPokemon: "#0009",
    imgPokemon: "./img/Blastoise.png",
    type: { typeOne: "Wather" },
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
    type: { typeOne: "Bug", typeTwo: "Flying" },
  },
  {
    namePokemon: "",
    idPokemon: "",
    imgPokemon: "",
    type: {
      typeOne: "Bug",
      typeTwo: "Flying",
      typeThree: "Dark",
      typeFour: "Dragon",
      typeFive: "Electric",
      typeSix: "Fairy",
      typeSeven: "Fighting",
      typeEight: "Ground",
      typeNine: "Ice",
      typeEleven: "Normal",
      typeTwelve: "Psychic",
      typeThirteen: "Rock",
      typeFourteen: "Steel",
    },
  },
];

function Creatcontainer() {
  const mainContainer = document.createElement("div");
  mainContainer.className = "mainContainer";
  app.appendChild(mainContainer);

  const menu = document.createElement("div");
  menu.className = "menu";
  mainContainer.appendChild(menu);

  const showAdwanced = document.createElement("p");
  showAdwanced.className = "showAdwanced";
  showAdwanced.textContent = "Show Advanced Search";
  menu.appendChild(showAdwanced);

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
  const cardPok = document.createElement("div");
  cardPok.className = "cardPok";
  groupCardPoc.appendChild(cardPok);

  const img = document.createElement("img");
  img.className = "img";
  img.src = basePok.imgPokemon;

  const textIdPoc = document.createElement("p");
  textIdPoc.className = "textIdPoc";
  textIdPoc.textContent = basePok.idPokemon;

  const namePokemon = document.createElement("h2");
  namePokemon.className = "namePokemon";
  namePokemon.textContent = basePok.namePokemon;

  const typePok = document.createElement("div");
  typePok.className = "typePok";
  cardPok.append(img, textIdPoc, namePokemon, typePok);

  renderCreatwsTypePokemon(basePok, typePok);
}

function renderCreatwsTypePokemon(basePok, typePok) {
  if (basePok.type) {
    for (key in basePok.type) {
      const type = document.createElement("p");
      type.className = basePok.type[key].toLowerCase();
      type.textContent = basePok.type[key];
      typePok.appendChild(type);
    }
  }
}

function blankDatabaseDataStub(basePok) {
  if (basePok.imgPokemon === "") {
    basePok.imgPokemon = "./img/pika.jpg";
    console.log("test");
  }
  if (basePok.namePokemon === "") {
    basePok.namePokemon = "dimakc";
  }
  if (basePok.idPokemon === "") {
    basePok.idPokemon = "000001";
  }
}
