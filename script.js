let url = 'https://api.disneyapi.dev/characters';
const test = document.getElementById('test');
const texto = document.createElement('div');
const imagem = document.createElement('img');
const povo = [];

const carregar = (async () => {
  for(let key = 0; key < 3; key += 1) {
    const response = await fetch(url);
    const data = await response.json();
    const array = Object.values(data);
    const personagens = array[0];
    url = array[3]
    personagens.forEach((personagem) => {
      povo.push(personagem);
    })
  }
});

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

window.onload = async () => {
  const personagens = await carregar();
  renderPersonagens(povo);

}
