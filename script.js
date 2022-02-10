const url = 'https://api.disneyapi.dev/characters';
const test = document.getElementById('test');
const texto = document.createElement('div');
const imagem = document.createElement('img');

const carregar = (async () => {
const json = await fetch(url);
const data = await json.json();
const array = await Object.values(data);
for(let key of array[0]) {
  let personagem = {
    nome: key.name,
    url: key.url,
    img: key.imageUrl,
  };
  imagem.src = personagem.img;
  texto.innerText = `Nome: ${personagem.nome}`;
  test.appendChild(texto);
  test.appendChild(imagem);
    console.log(personagem);
  }
  // console.log(array[0]);
});

window.onload = async () => {
  await carregar();
}
