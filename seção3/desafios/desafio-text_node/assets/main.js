const paragrafos = document.querySelector('.paragrafos') //dessa forma estou pegando apenas o 1º 'p'
const ps=paragrafos.querySelectorAll('p') //agora sim, estou pegando todas as tags 'p'

const estilosBody= getComputedStyle(document.body); //a função computedStyle retorna o estilo de alguma tag, nesse caso, escolhemos o body
const background_Body = estilosBody.backgroundColor;

/*Eles pegaram o css e jogaram dentro do js, então é possível ter acesso a quase todos os comandos do css pelo js, vale
salientar que ao invés de "-", é utlizado o camel case, ent em vez de background-color, se usa: backgroundColor*/
for (let p of ps){
    p.style.backgroundColor = background_Body
    p.style.color= 'white'
}