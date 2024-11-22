//formas de selecionar algo no html:
const animais = document.getElementById('animais')
const contato = document.getElementsByClassName('grid-section contato') //vai selecionar SÓ os q tem essas 2 classes
const ul = document.getElementsByTagName('ul')
/*vai me retornar como se fosse um array, caso tenha vários, ex, tenho várias coisas linkadas com o Id animais, daí ele
me retorna uma lista que basta eu indicar o índice para usar o elemento ao qual eu desejo*/

//seletor geral único - são formas mais gerais de selecionar
const elem = document.querySelector('.animais')
/*ele seleciona o primeiro elemento com o que está especificado nos parênteses - obs: posso passar tag, class, li, id, tudo, basta especificar.
Posso selecionar até href*/
const primeiro_ul=document.querySelector('ul')
li=primeiro_ul.querySelector('li') //posso fazer essa seleção mais específica também.

link_interno=document.querySelector('[href^="#"]')
console.log(link_interno)

/*Além do queryselector, que seleciona apenas o primeiro ou algum (tem como selecionar o último, basta especificar), eu tenho o:
querySelectorAll(), que seleciona todos os elementos com aquela especificação*/
const fotos_animais= document.querySelectorAll('.animais img')
/*PERMITE A UTILIZAÇÃO DE COLCHETES, HAJA VISTA QUE RETORNA UMA NODE LIST, não é um array.*/
console.log(fotos_animais)

/*html collection x node list
Node List é mais amplo, permite que consigamos usar muitos métodos a mais (forEach é um exemplo), além de permitir alteração nos membros,
diferentemente do html collection.*/

const gridSectionHTML = document.getElementsByClassName('grid-section') //html collection
const gridSectionNode= document.querySelector('.grid-section') //node list

console.log(gridSectionHTML)
console.log(gridSectionNode)

/*Adicionando uma classe (é nodelist, ent dá p add):
gridSection.forEach(function(gridItem, index, array) {
    gridItem.classList.add('azul');
    console.log(index) // index do item na array
    console.log(array) // a array completa
  }); */
primeiro_ul.classList.add()//eu adicionaria uma classe já criada, por ex: grid-section

/*html collection e node list são array-like. Resumidamente, possuem índices, podem usar um ou outro método de
array, mas no fundo não são. Entretanto, há como transformá-los em arrays:*/
const arrayGrid = Array.from(gridSectionHTML)

//como agora é array, eu posso usar os métodos que antes não podia.
arrayGrid.forEach(function(item, index){
    console.log(`Item: ${item} do índice: ${index}`)
})
const arrayGrid2 = Array.from(gridSectionNode)
