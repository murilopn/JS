const e= [
    {tag: 'p', texto: 'Digite o que quiseres:'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'},
]


//para adicionar na minha página HTML, eu tenho que criar um elemento que será responsável por isso, daí eu só jogo ele na página html ao final

const container  = document.querySelector('.container')
const div = document.createElement('div')

for (let i=0; i< e.length; i++){
    let {tag, texto}= e[i] //atribuição por desestruturação
    let tagCriada = document.createElement(tag)//eu tenho que criar tag, pois caso contrário estaria criando 4'p' ou 4'div', por isso o tag
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}
    container.appendChild(div)
/*OBS: Poderia excluir essa div.appendChild e só subir o container.appendChild pro loop, dá no mesmo. Não fiz isso pra ficar claro a ideia de que 
eu joguei todos os objetos atribuidos via desestruturação para uma coisa, no caso essa coisa é a 'div'. Além disso, se abrir o console, fica claro que 
está duto segmentado bonitinho dentro do 'div'*/
