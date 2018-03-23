/*

Desafio Fizzbuzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz'
Se o número for divisível por 5, no lugar do número escreva 'Buzz'
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
Se não for múltiplo de nada, retorna o número

*/

import { expect } from 'chai';
import { fizzbuzz } from '../main';

describe('Main', () => {
  it('should return "Fizz" when multiple of number is "3"', () => {
    expect(fizzbuzz(3)).to.equal('Fizz');
    expect(fizzbuzz(6)).to.equal('Fizz');
    expect(fizzbuzz(9)).to.equal('Fizz');
  });

  it('should return "Buzz" when multiple of number is "5"', () => {
    expect(fizzbuzz(5)).to.equal('Buzz');
    expect(fizzbuzz(10)).to.equal('Buzz');
    expect(fizzbuzz(20)).to.equal('Buzz');
  });

  it('should return "FizzBuzz" when multiple of number is "3" and "5"', () => {
    expect(fizzbuzz(15)).to.equal('FizzBuzz');
    expect(fizzbuzz(30)).to.equal('FizzBuzz');
    expect(fizzbuzz(45)).to.equal('FizzBuzz');
  });

  it('should return the number when multiple of number is not "3" or "5"', () => {
    expect(fizzbuzz(2)).to.equal(2);
    expect(fizzbuzz(4)).to.equal(4);
    expect(fizzbuzz(7)).to.equal(7);
    expect(fizzbuzz(11)).to.equal(11);
  });
});
