// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach(item=>console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item)=>{
  console.log(item.innerText);
})

/*Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => { - devia ser (item,index)
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {  - devia ser () =>
  console.log(i++);
});

imgs.forEach(() => i++); - não tem mt propósito iterar um i aleatório sozinho
*/