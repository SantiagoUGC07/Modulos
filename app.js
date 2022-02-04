
/*
import {mostrarResultado, sumar, multiplicar} from './calculadora.js';
// para importa se coloca from './namefile' si se le pone ./ es que esta dentro de la misma carpeta.

//para importa se tiene que especificar que es un modulo, eso se hace en html
let resultado = sumar(10, 20);
console.log(resultado);
let resultadoMultiplicar = multiplicar (12, 46);
mostrarResultado('multiplicacion', 12, 46, resultadoMultiplicar); 
*/


const {sumar, restar, multiplicar, dividir} = require('./app1');
describe('Pruebas en el componente calculadora', () => {
    test('Pruebas en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
        
    });
    test('Pruebas en la funcion restar', () => {
        expect(restar(3, 5)).toBe(-2);
    });
    test('Pruebas en la funcion de multiplicar', () => {
        expect(multiplicar(5, 5)).toBe(25);
    });
    test('Prueas en la funion de dividir',() =>{
        expect(dividir(10, 2)).toBe(5);
    });
})