POLIMORFISMO:
Classe = Função Construtora

Maneira de métodos se comportarem de forma diferente em classes filhas de mesmo pai. Eles se comportam como subclasses, ou seja, classes filhas de uma classe mãe. 

Um exemplo é em contas de banco (é o que foi feito no main.js). Temos a classe conta (Constructor function). Por herança, criei 2 subclasses, conta corrente (CC) e conta poupança (CP). A classe Conta possui o método sacar, entretanto, esse método deve funcionar de forma diferente entre as 2 subclasses, entre os 2 tipos de conta, haja vista que é possível ficar devendo na conta corrente. Por conta disso, criei um método sacar exclusivo para a classe conta que permita ficar devendo, é como se ele sobreescrevesse o método sacar do pai. A conta poupança continua usando o método de Conta, da classe pai. Portanto, tenho 2 classes filhas de mesmo pai usando métodos diferentes para uma mesma coisa, isso é POLIMORFISMO