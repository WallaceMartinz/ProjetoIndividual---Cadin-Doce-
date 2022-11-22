class Receita {

    constructor() {
        this.id = 1;
        this.vetorReceita = [];
    }

    salvar(){
       let receita = this.lerDados();
       console.log(receita)
        if (this.validaCampos(receita)) {
           this.adicionar(receita);
        }

        console.log(this.vetorReceita)
        console.log(this.receita)
    }

    adicionar() {
        this.vetorReceita.push(receita);
        this.id++;
    }

    lerDados() {
        let receita = {}

        receita.id = this.id;
        receita.tituloReceita = document.getElementById('ipt_title').value;
        receita.ingredientes = document.getElementById('ipt_ingredients').value;
        receita.modoDePreparo = document.getElementById('txt_mode').value;

        return receita;
    }

    validaCampos(receita){
        let msg = '';

        if (receita.tituloReceita == '') {
            msg += '- Informe o titulo da receita \n'
        }
        if (receita.ingredientes == '') {
            msg += '- Informe os ingredientes \n'
        }
        if (receita.modoDePreparo == '') {
            msg += '- Informe o modo de preparo \n'
        }
        if(msg != ''){
            alert(msg)
            return false 
        } 

        return true;
    }

    cancelar(){

    }
}
var receita = new Receita();

function exibir() {
    div_mostrar.innerHTML = `${receita}`
}
    
