const menu = document.querySelector('.menu');

menu.classList.add('ativo','teste','azul');

console.log(menu.classList)

menu.remove('azul')

console.log(menu.classList[1])

if (menu.classList.contains('teste')){
    menu.classList.remove('teste')
}

//uma outra alternativa é usar toggle, que adicione caso não tenha e exclua caso tenha

menu.classList.toggle('teste')

const animais  = document.querySelector('.animais')
console.log(animais.attributes)
console.log(animais.attributes[1])

const img = document.querySelector('img') //vai retornar a 1° imagem.

console.log(img.getAttribute('src'))

//vai rodar todas as imagens vendo se tem ou não texto alternativo (importante para inclusão)
const imgs = document.querySelectorAll('img')
imgs.forEach(item =>  console.log(item.hasAttribute('alt')));

//EXERCÍCIOS 

// Adicione a classe ativo a todos os itens do menu

const menus = document.querySelectorAll('.menu a') //o 'a' é para selecionar as lists do menu
menus.forEach(item=> item.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menus.forEach((item,index)=>{ 
    if (index!=0){
        item.classList.add('ativo')
    }
});
    // Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach(item => console.log(item.hasAttribute('alt')))

// Modifique o href do link externo no menu
const link = document.querySelector('a[href⁼"http"]');
link.setAttribute('href' , 'https://www.google.com/') //primeiro eu passo o que eu quero settar (href, no caso) e depois o valor.