const url = 'https://api.disneyapi.dev/characters';
const test = document.getElementById('test');
const texto = document.createElement('div');
const imagem = document.createElement('img');

const carregar = (async () => {
const response = await fetch(url);
const data = await response.json();
const array = await Object.values(data);
const personagens = array[0];
  return personagens
});

// RENDERS

const renderPersonagens = (personagem) => {
  const personagemCards = document.querySelector('.personagensCard');

  personagem.forEach((persona) => {
    const section = document.createElement('section');
    section.className = 'persona';
    section.id = persona.name;

    const paragraph = document.createElement('p');
    paragraph.className = 'persona-title';
    paragraph.innerHTML = persona.name;

    const img = document.createElement('img');
    img.className = 'persona-image';
    img.src = persona.imageUrl;

    section.appendChild(paragraph);
    section.appendChild(img);

    personagemCards.appendChild(section);
  });
};

window.onload = async () => {
  const personagens = await carregar();
  renderPersonagens(personagens);

}
