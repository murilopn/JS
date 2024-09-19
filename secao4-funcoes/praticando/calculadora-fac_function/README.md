ATENÇÃO: LEMBRAR QUE SEMPRE QUEM CHAMA A FUNÇÃO É O 'THIS'

há o seguinte problema: a function (e) na hora de usar this no btnparadisplay, vai se referir a quem chamou a função, ou 
seja, ao document, entretanto eu quero que ela se refira a calculadora. Para isso, eu devo usar um bind fora da minha function(e) para que
o this seja o this antes da chamada da função, ou seja, a calculadora. Uma outra alternativa ao .bind(this) é usar uma arrow function, pois 
as arrow functions NÃO alteram quem é o this. Ou seja, apesar do document chamar a função e nela ter o this, o this que será usada na arrow function
é o anterior, ou seja, a calculadora e não o document