    var numeroParaEncontrar = 0;
    var tentativas = 0;

    function atualizar() {
        var elemento = document.getElementById('xablau');
        elemento.value = '' // limpa o valor do meu input

    numeroParaEncontrar = parseInt(Math.random() * 100) 
    
    // parseInt converte para numeros inteiros
    // math é a biblioteca que usa numeros randomicos

    console.log('numero '+ numeroParaEncontrar);
    
    }

    atualizar(); // chama a função (cria a receita do bolo que escrevo nas funções)

    function verificarNumeros() {
    var elemento = document.getElementById('xablau')
    var numero = elemento.value // obtem o valor do input
    
    // pipe ( || ) significa "OU"

    if( numero > 100 || numero < 0 ) {
        alert('Aposta inválida');
        return;
    }

    if (numero > numeroParaEncontrar) 
    {
        tentativas++
        alert ('🚨 O número para ser encontrado é MENOS!')
    } 

    else if ( numero < numeroParaEncontrar)
    {
        tentativas++
        alert ('🚨 O número para ser encontrado é MAIOR!')
    } 

    else 
    {
        alert('🟩 Parabéns, voce acertou com: ' + tentativas + 'erros!');

        refresh();
    }

}

