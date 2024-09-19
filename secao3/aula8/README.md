Nessa aula, ele apresentou outras diferenças entre var e let     

let tem escopo de bloco e var tem escopo de função. Ex no index.js:

Com o var, eu posso usar uma variável que foi declarada fora da função na função, mas o contrário não é satisfeito (ex no index.js), o mesmo para let

Hoisting: Elevação - Ocorre quando eu uso uma variável antes de declarar, por exemplo, colocar um print antes de declarar a variável. O resultado será undefined. A engine do javascript, quando vê uma variável eleva ela para o topo do código. Isso acontece para o var (daí printa undefined), mas não ocorre para o let (printa que a variável não está definida). O hoisting também ocorre com funções criadas.

obs: ele eleva a declaração em si e não o valor atribuído, por isso da undefined e não propriamente o valor atribuido quando o var é declarado