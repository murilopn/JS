let  corUsuario=null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao)

corUsuario= 'vermelho';
corPadrao = corUsuario || 'preto';
console.log(corPadrao)


console.log('Luiz' && 2 &&'Jose')
console.log('Luiz' && NaN &&'Jose')
console.log(undefined && NaN && false)
console.log('Luiz' || 2 || 'Jose')
console.log('Luiz' || NaN || 'Jose')
console.log(undefined || NaN || false)
