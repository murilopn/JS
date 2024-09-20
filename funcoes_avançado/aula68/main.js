const nome =  function (){
    console.log('Joao');
}
nome();

const arrow_func = () => {
    console.log("Sou uma arrow function");
};
arrow_func();

const obj = {
    falar: function(){  //ao invés de function, posso colocar falar () e começar a função, mais prático
        console.log('testando');
    }
};
obj.falar();

const obj2 = {
    falar(){  
        console.log('testando2');
    }
};
obj2.falar();