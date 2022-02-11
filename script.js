window.onload = async () => {
let url = 'https://api.disneyapi.dev/characters';
const test = document.getElementById('test');
const texto = document.createElement('div');
const imagem = document.createElement('img');
const povo = [];
const numerosAleatorios = [];

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const geraPovo = async (povo) => {
//   for(let key = 1; key < 500; key += 1) {
//   const numero = await getRandomIntInclusive(1, 100);
//   const povo2 = await povo[numero];
//   numerosAleatorios.push(povo2);
//   }
//   return numerosAleatorios;
// }

const personagemCards = document.querySelector('.personagensCard');

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

function carregando(parent) {
  const element = createCustomElement('section', 'loading', 'Carregando...');
  parent.appendChild(element);
  }
  
  function carregado(parent) {
  const element = document.querySelector('.loading');
  parent.removeChild(element);
  };

const carregar = async () => {
  carregando(personagemCards);
  for(let key = 1; key < 150; key += 1) {
    const response = await fetch(url);
    const data = await response.json();
    const array = Object.values(data);
    const personagens = array[0];
    personagens.forEach((personagem) => {
      povo.push(personagem);
      url = `https://api.disneyapi.dev/characters?page=${key}`;
    })
  }
  carregado(personagemCards);
  return povo;
};

// RENDERS

const renderPersonagens = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');

  personagem.forEach((persona) => {
    const section = document.createElement('section');
    section.className = 'g-col-4 persona';
    section.id = persona.name;

    const paragraph = document.createElement('p');
    paragraph.className = 'persona-title fs-3 text-center';
    paragraph.innerHTML = persona.name;

    const img = document.createElement('img');
    img.className = 'persona-image border border-dark border-4 rounded';
    img.src = persona.imageUrl;

    section.appendChild(paragraph);
    section.appendChild(img);

    personagemCards.appendChild(section);
  });
};

  await carregar();
  await renderPersonagens(povo);

}
