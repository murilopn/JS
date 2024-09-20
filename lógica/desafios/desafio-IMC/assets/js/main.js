const form = document.querySelector('#formulario')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input_massa = e.target.querySelector('#massa');
    const input_altura = e.target.querySelector('#altura');

    const massa = Number(input_massa.value);
    const altura = Number(input_altura.value);
    if (!altura) {
        setResultado('Altura incorreta', false);
    }

    else if (!massa) {
        setResultado('Massa incorreta', false);
    }
    else{
        imc = getIMC(altura, massa);
        const classficacao_imc=getNivelIMC(imc)
        const msg= (`O seu imc é: ${imc} ${classficacao_imc}`)
        setResultado(msg, true)
    }
});

function criaP() {
    const p = document.createElement('p');

    return p;
}

function getIMC(a, m) {
    const imc = m / (a * a)
    return imc.toFixed(2);
}

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
   
    if (imc < 18.5) return nivel[0];
    else if (18.5 <= imc && imc < 25)return nivel[1];
    else if (25 <= imc && imc < 30)return nivel[2];
    else if (30 <= imc && imc < 35)return nivel[3];
    else if (35 <= imc && imc <40.1)return nivel[4];
    else return nivel[5];
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid){
        p.classList.add('paragrafo-resultado')
    }
    else{
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}