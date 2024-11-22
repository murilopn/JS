/* FAZENDO OS EXERCÍCIOS*/
//retornar todas as imagens do console:
const imgs=document.querySelectorAll('img')
console.log(`todas as imagens do console: ${imgs}`)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens=document.querySelectorAll('imgs[src^="img/imagem"]')
console.log(imagens)


// Selecione todos os links internos (onde o href começa com #)
const links=document.querySelectorAll('[href^="#"]')
console.log(`Links href: ${links}`)

// Selecione o primeiro h2 dentro de .animais-descricao
first_h2 = document.querySelector('.animais-descricao h2')
console.log(`Primeiro h2: ${first_h2}`)

// Selecione o último p do site
lastP=document.querySelectorAll('p')
console.log(lastP[lastP.length-1])
