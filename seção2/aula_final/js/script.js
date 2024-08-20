function meuEscopo (){
    const form = document.querySelector('.form');//SEMPRE que é class, nós utilizamos esse ponto para identificar
    const resultado =document.querySelector('.resultado');
    const pessoas = [];
    function recebeEventoForm(evento){
        evento.preventDefault();
        nome=form.querySelector('.nome');
        sobrenome=form.querySelector('.sobrenome');
        altura=form.querySelector('.altura');
        massa=form.querySelector('.massa');
        
        pessoas.push({ //fiz com que meu array virasse uma espécie de objeto
            nome:nome.value,
            sobrenome: sobrenome.value,
            massa:massa.value,
            altura: altura.value,
        });

        console.log(pessoas); //para printar no console da página html (ctrl + shift + j)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${massa.value} ${altura.value}</p>` //é só para exibir na página mesmo
    }
   form.addEventListener('submit', recebeEventoForm);
}

    meuEscopo();