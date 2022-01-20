function valida(){
    let numero1 = Number(prompt('Entre com o primeiro número:'));
    let numero2 = Number(prompt('Entre com o segundo número:'));
    let resultado;

    if(!numero1 || !numero2){
        alert('Favor entrar com números para fazer operações!');
        valida();
    }else{

        let soma = numero1 + numero2;
        let iguais = numero1===numero2?'são':'não são';
        let maior10 = soma>10?'maior':soma==10?'igual':'menor';
        let menor20 = soma<20?'menor':soma==20?'igual':'maior';
        
        if (soma > 10 || soma < 20){
            alert(`Os números ${numero1} e ${numero2} ${iguais} iguais. Sua soma é ${soma} que é ${maior10} que 10 e ${menor20} que 20`);
        }
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt('Deseja comparar outros números?\n 1 - Sim\n 2 - Não');
        if (opcao == 1){
            valida();
        }else if (opcao == 2){
            alert('Espero que tenha gostado.\nAté breve');
        }else{
            alert('Opção inválida!\nFavor digitar uma opção válida!');
            novaOperacao();
        }
    }

}

valida();
