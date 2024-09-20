//fazendo a calculadora por factory function
//ATENÇÃO: LEMBRAR QUE SEMPRE QUEM CHAMA A FUNÇÃO É O 'THIS'
function criaCalculadora(input){
    return {
        display:document.querySelector('.display'),//estou selecionando a classe q quero trabalhar (lá do html) e jogando ela p meu atributo

        
        inicia(){
            
            this.cliqueBotoes();//O this é quem chama, ou seja, a calculadora
        },
        
        cliqueBotoes(){ //havia dando um problema, ler o README.md
            
            document.addEventListener('click', function(e) { //reconhecendo o click do usuário
                const el=e.target; //tenho que filtrar, pq o eventlistener reconhece qualquer evento na tela, seja clicar no botão ou no body
                
                if(el.classList.contains('btn-num')){ //ou seja, se a "clicada" q o usuário deu for em alguma coisa da class "btn-num"
                    this.btnParaDisplay(el.innerText);//innerText é o que está dentro da tag button
                }
                
                 if (el.classList.contains('btn-clear')){
                    this.clearDisplay()
                 }

                 if(el.classList.contains('btn-del')){
                    this.delDisplay()
                 }

                 if(el.classList.contains('btn-eq')){
                    this.equal()
                 }
                 
                }.bind(this))
            },
            
            btnParaDisplay(valor){
                this.display.value+=valor;
                
            },

            clearDisplay(){
                this.display.value= ''
            },

            delDisplay(){
                this.display.value = this.display.value.slice(0,-1)//slice = (tamanho da string, -1)
            },

            equal(){
                let conta = this.display.value
                conta=eval(conta)
                
                if(!conta){
                    alert('Não é número')

                }
                else{
                    this.display.value=conta
                }
            }
    
            
    }
}

calculadora = criaCalculadora()
calculadora.inicia()