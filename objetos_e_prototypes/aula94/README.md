Manipulando prototypes

obs: chamar const obj = new Object() e dar obj.nome = 'Murilo' é a mesma coisa q só criar um objeto, tipo const obj= {nome:'Murilo'} e escrever dentro.

O prototype vem sempre atrelado à função constrututora.

Ao usar Object.setPrototypeOf(), a chain fica : obj B, depois obj A, dps prototype do B, dps Object.prototype()

Podemos criar um objeto já setando o seu prototype: const p3= Object.create('nome da classe'.prototype) (ex no código)