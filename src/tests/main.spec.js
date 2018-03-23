import { expect } from 'chai';

import calc from '../main';

describe('Calc', () => {

  // smoke tests
  describe('Smoke Tests', () => {

    it('should exist "calc" lib', () => {
      expect(calc).to.exist;
    });

    it('should exist method "sum"', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist method "sub"', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist method "div"', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist method "mult"', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  // sum method tests
  describe('Sum', () => {
    it('should return 4 when "sum(2,2)"', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  // sub method tests
  describe('Sub', () => {
    it('should return 1 when "sub(3,2)"', () => {
      expect(calc.sub(3, 2)).to.be.equal(1);
    });

    it('should return -4 when "sub(4,8)"', () => {
      expect(calc.sub(4, 8)).to.be.equal(-4);
    });
  });

  // mult method tests
  describe('Mult', () => {
    it('should return 6 when "mult(3,2)"', () => {
      expect(calc.mult(3, 2)).to.be.equal(6);
    });
  });

  // div method tests
  describe('Div', () => {
    it('should return 2 when "div(4,2)"', () => {
      expect(calc.div(4, 2)).to.be.equal(2);
    });

    it('should return NaN when "div(3,0)"', () => {
      expect(calc.div(3, 0)).to.be.equal(Infinity);
    });
  });
});
