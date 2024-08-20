const num = Number(prompt('Digite um número: ')) //essa função sempre retorna como string
const num_escolhido = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')


num_escolhido.innerHTML=num;
texto.innerHTML+=`<p>É NaN: ${Number.isNaN(num)}.<p/>`;
texto.innerHTML+=`<p> Raíz quadrada: ${num ** 0.5}.</p>`;
texto.innerHTML+=`<p>Com duas casas decimais: ${num.toFixed(2)}<p/>`;
texto.innerHTML+=`<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML+=`<p>Arredondado para baixo: ${Math.floor(num)}<p/>`;
texto.innerHTML+=`<p>Arredondado para cima: ${Math.round(num)}<p/>`;