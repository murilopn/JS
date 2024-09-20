//fazendo a calculadora por construct function
//ATENÇÃO: LEMBRAR QUE SEMPRE QUEM CHAMA A FUNÇÃO É O 'THIS'
function Calculadora(input) {
    
        this.display = document.querySelector('.display')

        this.inicia = () => { //lembrar que tudo deve ser criado usando o this
            this.cliqueBotoes();

        }

        this.cliqueBotoes = () => {
            document.addEventListener('click', event=>{

                const el = event.target;

                if (el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
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
                 
            })
        }
        this.btnParaDisplay= (valor) =>{
            this.display.value+=valor;
        }
            
        this.clearDisplay=()=>{
            this.display.value= ''
        }

        this.delDisplay=()=>{
            this.display.value = this.display.value.slice(0,-1)
        }
        this.equal=()=>{
            let conta=this.display.value
            conta=eval(conta)
            console.log(conta)

            if(!conta){
                alert("Valor inválido")
                return;
            }
            else{
                this.display.value=conta
            }

        }

}


const calculadora = new Calculadora()
calculadora.inicia()