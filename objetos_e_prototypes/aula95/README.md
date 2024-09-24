HERANÇA 

Produto.proto (ou prototype, é a msm coisa), há uma propriedade apontando para o construtor (constructor: f Produto(nome, preco)). Ao linkar Camiseta, essa função perde o seu proto (Camiseta). Para resolver isso, devemos voltar com o construtor:

Para que serve:
Gerar reuso do código, aumentando significativamente a organização do meu código, o que facilita a manutenção.

Como fazer:
'Função construtora Pai'.call (this, p1, p2, p3)

this: Para que a filha herde as propriedades do pai
p: Parâmetro que eu quero herdar


Observações:
Ao dar call, eu estou querendo que a função construtuora filha herde as propriedades, ou seja, os parâmetros, da função construtuora pai, não os valores. Além disso, eu posso extender a usabilidade, em suma, consigo colocar mais propriedades (por ex, eu herdo preço e nome e consigo acrescentar material, basta this.material=material)

SUPER IMPORTANTE!!!!!!!!!!!!!!!!:
Na hora de dar call, a função filha NÃO herda não copia ou altera a cadeia de protótipos, ou seja, a função filha perde o seu protótipo, por causa disso eu devo reafirmar quem é o pai dela:

'função filha'.prototype,constructor= 'função filha'

OUTRO ADENDO: O Call só herda as propriedades, os métodos (prototypes) não são herdados, para isso é necessário fazer:
'função filha'.prototype = Object.create('função pai'.prototype);

POR FIM, é importante se atentar a ordem de inicialização, é bom colocar a parte de instanciação na parte de baixo do código, após as heranças e afins.