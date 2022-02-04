const sumar = (numero1, numero2) => 
{
    return numero1 + numero2;
}

const restar = (numero1, numero2) => 
{
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) =>
{
    return numero1 * numero2;
}

const dividir = (numero1, numero2) =>
{
    return numero1 / numero2;
}

const mostrarResultado = (operacion, numero1, numero2, resultado) =>
{
    const respuesta = document.createElement('h3');
    respuesta.textContent = `la ${operacion} del ${numero1} y el ${numero2} es: ${resultado}`;
    document.body.appendChild(respuesta);
    //appendChild: inserta elementos debajo de los ya existentes en etiqueta html
}

module.exports = {
    sumar, restar, multiplicar, dividir, mostrarResultado
}

/*
export //sirve para exportar las funciones a otro archivo JS
{
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado,
}*/
    // tambien se puede poner el expor en cada uno de las constantes hay que checar cada uno de los detalles con las carpetas y donde se colocan tienen que tener la extencion de .js

