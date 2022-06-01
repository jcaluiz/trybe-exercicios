const uppercase = require('./exercises7');

describe('verificar a chamada da callback', () => {

    beforeEach(() => {
        const actual = uppercase('verificar a chamada', console.log);
        const expected = 'VERIFICAR A CHAMADA';
        test('uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas', (done) => {
            try {
                expect(actual).toBe(expected);
                done();
            } catch (error) {
                done(error);
            }
    
        })
    })

});