let numero = 0;
let url;
const botaoGerador = document.querySelector('.botao');

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

const validaFilmes = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');
  const filmes = await personagem.films;
  if(filmes.length !== 0){
    const section = document.createElement('section');
    section.className = 'filmes container col border shadow';
    const titulo = document.createElement('h5');
      titulo.className = 'filmes-title';
      titulo.innerHTML = 'Quais filmes ja participei?';
      
      const lista = document.createElement('ul');
      const itemLista = await filmes.forEach((filme) => {
        const item = document.createElement('li');
        item.className = 'listFilms col';
        item.innerText = filme;
        lista.appendChild(item);
    });
    section.appendChild(titulo);
    section.appendChild(lista);
    personagemCards.appendChild(section);
  } else {
    const section = document.createElement('section');
    section.className = 'filmes container col border shadow';
    const titulo = document.createElement('h5');
    titulo.className = 'filmes-title col';
    titulo.innerHTML = 'Nunca participei de nenhum filme';
      section.appendChild(titulo);
      personagemCards.appendChild(section);
    }
  }; 
  
  const validaSeries = async (personagem) => {
    const personagemCards = document.querySelector('.personagensCard');
    const series = await personagem.tvShows;
    if(series.length !== 0){
    const section = document.createElement('section');
    section.className = 'series container col border shadow';
    const titulo = document.createElement('h5');
    titulo.className = 'series-title col';
    titulo.innerHTML = 'Quais series ja participei?';
    
    const lista = document.createElement('ul');
    const itemLista = await series.forEach((serie) => {
      const item = document.createElement('li');
      item.className = 'listSeries col';
      item.innerText = serie;
      lista.appendChild(item);
    });
    section.appendChild(titulo);
    section.appendChild(lista);
    personagemCards.appendChild(section);
  } else {
    const section = document.createElement('section');
    section.className = 'series container col border shadow';
    const titulo = document.createElement('h5');
    titulo.className = 'series-title col';
    titulo.innerHTML = 'Nunca participei de nenhuma serie';
    section.appendChild(titulo);
    personagemCards.appendChild(section);
  }
}; 

const validaCurtas = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');
  const curtas = await personagem.shortFilms;
  if(curtas.length !== 0){
    const section = document.createElement('section');
    section.className = 'curtas col container border shadow';
    const titulo = document.createElement('h5');
    titulo.className = 'col curtas-title';
      titulo.innerHTML = 'Quais curtas ja participei?';
      
      const lista = document.createElement('ul');
      const itemLista = await curtas.forEach((curta) => {
        const item = document.createElement('li');
        item.className = 'col listcurta';
        item.innerText = curta;
        lista.appendChild(item);
      });
      section.appendChild(titulo);
      section.appendChild(lista);
      personagemCards.appendChild(section);
    } else {
      const section = document.createElement('section');
      section.className = 'col curtas container border shadow';
      const titulo = document.createElement('h5');
      titulo.className = 'col curtas-title';
      titulo.innerHTML = 'Nunca participei de nenhum curta';
      section.appendChild(titulo);
      personagemCards.appendChild(section);
  }
}; 

const validaGames = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');
  const jogos = await personagem.shortFilms;
  if(jogos.length !== 0){
    const section = document.createElement('section');
    section.className = 'jogos container col border shadow';
    const titulo = document.createElement('h5');
    titulo.className = 'jogos-title col';
    titulo.innerHTML = 'Quais jogos ja participei?';
    
    const lista = document.createElement('ul');
    const itemLista = await jogos.forEach((jogo) => {
      const item = document.createElement('li');
      item.className = 'listjogo col container border';
      item.innerText = jogo;
      lista.appendChild(item);
    });
    section.appendChild(titulo);
    section.appendChild(lista);
    personagemCards.appendChild(section);
  } else {
    const section = document.createElement('section');
    section.className = 'jogos container border col shadow';
    const titulo = document.createElement('h5');
    titulo.className = 'jogos-title col';
    titulo.innerHTML = 'Nunca participei de nenhum jogo';
    section.appendChild(titulo);
    personagemCards.appendChild(section);
  }
}; 

const criaInformacoes = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');
  const section = document.createElement('section');
  section.className = 'informacoes';
  
  const titulo = document.createElement('h5');
  titulo.className = 'informacoes-title';
  titulo.id = 'titulo'
  titulo.innerHTML = 'Informações';
  
  const paragraph = document.createElement('p');
  paragraph.className = 'informacoes-texto'
  paragraph.innerHTML = `Olá mundo, eu sou ${personagem.name}!`;
  section.appendChild(titulo);
  section.appendChild(paragraph);
  
  personagemCards.appendChild(section);
  validaFilmes(personagem);
  validaSeries(personagem);
  validaCurtas(personagem);
  validaGames(personagem);
} 

const personagemAleatorio = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
);

const renderPersonagens = async (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');
  const personagemNumero = personagemAleatorio(0, 49);
  
  const section = document.createElement('section');
  section.className = 'personagem col';
  section.id = personagem[personagemNumero].name;
  
  const paragraph = document.createElement('h5');
  paragraph.className = 'personagem-title col';
  paragraph.innerHTML = personagem[personagemNumero].name;
  
  const img = document.createElement('img');
  img.className = 'personagem-image col';
  img.src = personagem[personagemNumero].imageUrl;
  
  section.appendChild(paragraph);
  section.appendChild(img);
  
  personagemCards.appendChild(section);
  criaInformacoes(personagem[personagemNumero]);
};

window.onload = async () => {
  await geraAleatorio(1, 150);
  await carregar();
}