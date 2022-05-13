const { sum, myRemove, myFizzBuzz } = require('./sum');

describe('Testes da função sum', () => {
    test('Espera que exista a função sum', () => {
        expect(typeof sum).toBe('function');
    });

    test('testando se o retorno da soma de 4 e 5 é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test('testando se o retorno da soma de 0 e 0 é igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test('testando se o retorno da soma de 4 e "5" é igual a mensagem de erro', () => {
        expect(() => sum()).toThrow('parameters must be numbers');
    });
});

describe('Testes da função myRemove', () => {
    test('Espera que exista a função myRemove', () => {
        expect(typeof myRemove).toBe('function');
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});

describe('Testes da função myFizzBuzz', () => {
    test('Uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(3, 5)).toBe('fizz');
    });

    test('Uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    test('Uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    test('uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(8, 10)).toBeFalsy;
    });
});