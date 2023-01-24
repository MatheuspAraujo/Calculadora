function insert(number)
{
    var numero = document.getElementById('resultado').innerHTML;              /* para inserrir numero na calculadore*/
    document.getElementById('resultado').innerHTML = numero + number;         /* para o numero ficar ao lado do outro */
}

function clean()
{
    document.getElementById('resultado').innerHTML =  ""                      /* para limpar a calculadora */
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);    /* para apagar numero */
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);       /* para calcular as contas */
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}