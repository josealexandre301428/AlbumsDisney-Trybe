let numero = 0;
let url;
const botaoGerador = document.getElementById('gera-personagem');

const geraAleatorio = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  numero =  Math.floor(Math.random() * (max - min + 1)) + min;
  url = `https://api.disneyapi.dev/characters?page=${numero}`;
}
);

const carregar = async () => {
  const promise = await fetch(url);
  const data = await promise.json();
  renderPersonagens(data.data);
};

const personagemAleatorio = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
);

const renderPersonagens = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');
  const personagemNumero = personagemAleatorio(1, 50);
  
  const section = document.createElement('section');
  section.className = 'personagem';
  section.id = personagem[personagemNumero].name;
  
  const paragraph = document.createElement('h2');
  paragraph.className = 'personagem-title';
  paragraph.innerHTML = personagem[personagemNumero].name;
  
  const img = document.createElement('img');
  img.className = 'personagem-image';
  img.src = personagem[personagemNumero].imageUrl;
  
  section.appendChild(paragraph);
  section.appendChild(img);
  
  personagemCards.appendChild(section);
  criaInformacoes(personagem[personagemNumero]);
  ;
};

window.onload = async () => {
  const personagens = await carregar();
  renderPersonagens(personagens);
  console.log(personagens);

  const section = document.createElement('section');
  section.className = 'informacoes';
  
  const titulo = document.createElement('h2');
  titulo.className = 'informacoes-title';
  titulo.id = 'titulo'
  titulo.innerHTML = 'Informações';
  
  const paragraph = document.createElement('p');
  paragraph.className = 'informacoes-texto'
  paragraph.innerHTML = `Este aqui é o ${personagem.name}, ele já participou
  de alguns filmes, como por exemplo: ${personagem.shortFilms[0]}, ou séries como: ${personagem.tvShows[0]}, as vezes até video-games como o ${personagem.videoGames[0]}`
  
  section.appendChild(titulo);
  section.appendChild(paragraph);
  
  personagemCards.appendChild(section);
}

window.onload = async () => {
  geraAleatorio(1, 150);
  carregar();
}