//Procurar o botao
document.querySelector("#add-time")
//Clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField(){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) /*node = Clonar html / const = variavel constante */
   
    //Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
   //Para cada campo, limpar
    fields.forEach(function(field){ 
        //Pegar o field do momento e limpar
        field.value = ""
    });
   
    //Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

/* JEITO "nao inteligente k"
    fields[0].value = ""
    fields[1].value = ""*/